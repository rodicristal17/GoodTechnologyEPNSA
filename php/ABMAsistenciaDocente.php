<?php
include_once('control_de_variables.php');

$funt = "";
if (isset($_POST['funt'])) {
    $funt = preparar_variables(utf8_decode($_POST['funt']));
}

include_once("conexion.php");
include_once("verificar_navegador.php");
include_once("buscar_nivel.php");
include_once('quitarseparadormiles.php');

function post_asistencia_docente($nombre)
{
    if (!isset($_POST[$nombre])) {
        return "";
    }
    return preparar_variables(utf8_decode($_POST[$nombre]));
}

function bind_asistencia_docente($stmt, $tipos, &$parametros)
{
    if ($tipos == "") {
        return;
    }
    $referencias = array();
    $referencias[] = $tipos;
    foreach ($parametros as $indice => $valor) {
        $referencias[] = &$parametros[$indice];
    }
    call_user_func_array(array($stmt, 'bind_param'), $referencias);
}

function html_asistencia_docente($valor)
{
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

function dia_semana_asistencia_docente($fecha)
{
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $fecha)) {
        return "";
    }

    $partes = explode("-", $fecha);
    if (!checkdate((int)$partes[1], (int)$partes[2], (int)$partes[0])) {
        return "";
    }

    $dias = array(
        1 => "LUNES",
        2 => "MARTES",
        3 => "MIERCOLES",
        4 => "JUEVES",
        5 => "VIERNES",
        6 => "SABADO",
        7 => "DOMINGO"
    );

    $numeroDia = (int)date('N', strtotime($fecha));
    return $dias[$numeroDia];
}

function asegurar_tabla_asistencia_docente($mysqli)
{
    $consulta = "CREATE TABLE IF NOT EXISTS asistencia_docente (
        idasistencia_docente int(11) NOT NULL AUTO_INCREMENT,
        iddocente_catedraFK int(11) NOT NULL,
        fecha date NOT NULL,
        estado_asistencia varchar(45) NOT NULL DEFAULT 'Pendiente',
        hora_entrada varchar(45) DEFAULT NULL,
        hora_salida varchar(45) DEFAULT NULL,
        observacion varchar(250) DEFAULT NULL,
        cod_usuario int(11) NOT NULL DEFAULT 0,
        editadopor int(11) NOT NULL DEFAULT 0,
        fechainser timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fechaedit timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (idasistencia_docente),
        UNIQUE KEY uq_asistencia_docente_fecha (iddocente_catedraFK, fecha),
        KEY fk_asistencia_docente_docente_catedra_idx (iddocente_catedraFK),
        CONSTRAINT fk_asistencia_docente_docente_catedra
            FOREIGN KEY (iddocente_catedraFK)
            REFERENCES docente_catedra (iddocente_catedra)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

    if (!$mysqli->query($consulta)) {
        $informacion = array("1" => "error", "2" => "No se pudo preparar la tabla de asistencia docente");
        echo json_encode($informacion);
        exit;
    }
}

function verificar($funt)
{
    $user = post_asistencia_docente("useru");
    $pass = post_asistencia_docente("passu");
    $pass = str_replace("=", "+", $pass);
    $navegador = post_asistencia_docente("navegador");

    $resp = verificar_navegador($user, $navegador, $pass);
    if ($resp != "ok") {
        $informacion = array("1" => "UI");
        echo json_encode($informacion);
        exit;
    }

    if ($funt == "buscar") {
        $fecha = post_asistencia_docente("fecha");
        $filial = post_asistencia_docente("filial");
        $carrera = post_asistencia_docente("carrera");
        $grado = post_asistencia_docente("grado");
        $turno = post_asistencia_docente("turno");
        $seccion = post_asistencia_docente("seccion");
        $docente = post_asistencia_docente("docente");
        $documento = post_asistencia_docente("documento");
        buscar_asistencia_docente($fecha, $filial, $carrera, $grado, $turno, $seccion, $docente, $documento);
    }

    if ($funt == "guardar") {
        $iddocente_catedra = post_asistencia_docente("iddocente_catedra");
        $fecha = post_asistencia_docente("fecha");
        $estado_asistencia = post_asistencia_docente("estado_asistencia");
        $hora_entrada = post_asistencia_docente("hora_entrada");
        $hora_salida = post_asistencia_docente("hora_salida");
        $observacion = post_asistencia_docente("observacion");
        guardar_asistencia_docente($user, $iddocente_catedra, $fecha, $estado_asistencia, $hora_entrada, $hora_salida, $observacion);
    }

    $informacion = array("1" => "DI");
    echo json_encode($informacion);
    exit;
}

function buscar_asistencia_docente($fecha, $filial, $carrera, $grado, $turno, $seccion, $docente, $documento)
{
    if ($fecha == "") {
        $informacion = array("1" => "DI");
        echo json_encode($informacion);
        exit;
    }

    $diaSemana = dia_semana_asistencia_docente($fecha);
    if ($diaSemana == "") {
        $informacion = array("1" => "DI");
        echo json_encode($informacion);
        exit;
    }

    $mysqli = conectar_al_servidor();
    asegurar_tabla_asistencia_docente($mysqli);

    $condiciones = array(
        "dtc.estado = 'Activo'",
        "(UPPER(dtc.dias) = ? OR IFNULL(dtc.dias,'') = '')"
    );
    $tipos = "ss";
    $parametros = array($fecha, $diaSemana);

    if ($filial != "") {
        $condiciones[] = "dtc.cod_filial = ?";
        $tipos .= "s";
        $parametros[] = $filial;
    }
    if ($carrera != "") {
        $condiciones[] = "ml.cod_carrera = ?";
        $tipos .= "s";
        $parametros[] = $carrera;
    }
    if ($grado != "") {
        $condiciones[] = "dtc.curso = ?";
        $tipos .= "s";
        $parametros[] = $grado;
    }
    if ($turno != "") {
        $condiciones[] = "dtc.turno = ?";
        $tipos .= "s";
        $parametros[] = $turno;
    }
    if ($seccion != "") {
        $condiciones[] = "dtc.seccion = ?";
        $tipos .= "s";
        $parametros[] = $seccion;
    }
    if ($docente != "") {
        $condiciones[] = "ltp.nombreapellido LIKE ?";
        $tipos .= "s";
        $parametros[] = "%" . $docente . "%";
    }
    if ($documento != "") {
        $condiciones[] = "ltp.nrodocumento = ?";
        $tipos .= "s";
        $parametros[] = $documento;
    }

    $where = implode(" AND ", $condiciones);
    $sql = "SELECT dtc.iddocente_catedra, dtc.dias, dtc.hinicio, dtc.hfin, dtc.turno, dtc.seccion,
        dtc.anho, dtc.curso, dtc.semestre, fl.nombre AS nombrefilial,
        ltp.nrodocumento, ltp.nombreapellido,
        lm.nombre AS nombreMateria, lc.nombre AS nombreCarrera,
        IFNULL(ad.idasistencia_docente,'') AS idasistencia_docente,
        IFNULL(ad.estado_asistencia,'Pendiente') AS estado_asistencia,
        IFNULL(ad.hora_entrada,'') AS hora_entrada,
        IFNULL(ad.hora_salida,'') AS hora_salida,
        IFNULL(ad.observacion,'') AS observacion
        FROM docente_catedra dtc
        INNER JOIN listadoprofesores ltp ON ltp.idlistadoProfesores = dtc.idlistadoProfesores
        INNER JOIN filial fl ON fl.cod_filial = dtc.cod_filial
        INNER JOIN mallacurricular ml ON ml.idmallacurricular = dtc.idmallacurricular
        INNER JOIN listadodematerias lm ON lm.idlistadodematerias = ml.idlistadodematerias
        INNER JOIN listadecarreras lc ON lc.Cod_listadecarreras = ml.cod_carrera
        LEFT JOIN asistencia_docente ad ON ad.iddocente_catedraFK = dtc.iddocente_catedra AND ad.fecha = ?
        WHERE " . $where . "
        ORDER BY dtc.curso ASC, lc.nombre ASC, dtc.turno ASC, dtc.seccion ASC,
        FIELD(UPPER(dtc.dias), 'LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'),
        dtc.hinicio ASC, ltp.nombreapellido ASC";

    $stmt = $mysqli->prepare($sql);
    if (!$stmt) {
        mysqli_close($mysqli);
        $informacion = array("1" => "error");
        echo json_encode($informacion);
        exit;
    }
    bind_asistencia_docente($stmt, $tipos, $parametros);

    if (!$stmt->execute()) {
        mysqli_close($mysqli);
        $informacion = array("1" => "error");
        echo json_encode($informacion);
        exit;
    }

    $result = $stmt->get_result();
    $total = mysqli_num_rows($result);
    $pagina = "";
    $gradoActual = "";
    $grados = array();
    $docentes = array();
    $pendientes = 0;

    if ($total > 0) {
        while ($valor = mysqli_fetch_assoc($result)) {
            $iddocente_catedra = $valor['iddocente_catedra'];
            $idasistencia_docente = utf8_encode($valor['idasistencia_docente']);
            $dias = utf8_encode($valor['dias']);
            $hinicio = utf8_encode($valor['hinicio']);
            $hfin = utf8_encode($valor['hfin']);
            $turno = utf8_encode($valor['turno']);
            $seccion = utf8_encode($valor['seccion']);
            $anho = utf8_encode($valor['anho']);
            $curso = utf8_encode($valor['curso']);
            $semestre = utf8_encode($valor['semestre']);
            $nombrefilial = utf8_encode($valor['nombrefilial']);
            $nrodocumento = utf8_encode($valor['nrodocumento']);
            $nombreapellido = utf8_encode($valor['nombreapellido']);
            $nombreMateria = utf8_encode($valor['nombreMateria']);
            $nombreCarrera = utf8_encode($valor['nombreCarrera']);
            $estado_asistencia = utf8_encode($valor['estado_asistencia']);
            $hora_entrada = utf8_encode($valor['hora_entrada']);
            $hora_salida = utf8_encode($valor['hora_salida']);
            $observacion = utf8_encode($valor['observacion']);
            $horario = trim($hinicio . " - " . $hfin);
            if ($horario == "-") {
                $horario = "";
            }
            if ($dias == "") {
                $dias = "SIN DIA";
            }
            if ($curso == "") {
                $curso = "SIN GRADO";
            }

            $grados[$curso] = true;
            $docentes[$nrodocumento] = true;
            if ($idasistencia_docente == "" || strtoupper($estado_asistencia) == "PENDIENTE") {
                $pendientes++;
            }

            if ($gradoActual != $curso) {
                $gradoActual = $curso;
                $pagina .= "<div class='asistencia-docente-grado'>Grado: " . html_asistencia_docente($curso) . "</div>";
            }

            $estadoPendiente = "";
            $estadoPresente = "";
            $estadoAusente = "";
            $estadoTarde = "";
            $estadoJustificado = "";
            $estadoSuspendido = "";
            if ($estado_asistencia == "Presente") {
                $estadoPresente = "selected";
            } elseif ($estado_asistencia == "Ausente") {
                $estadoAusente = "selected";
            } elseif ($estado_asistencia == "Tarde") {
                $estadoTarde = "selected";
            } elseif ($estado_asistencia == "Justificado") {
                $estadoJustificado = "selected";
            } elseif ($estado_asistencia == "Suspendido") {
                $estadoSuspendido = "selected";
            } else {
                $estadoPendiente = "selected";
            }

            $pagina .= "<table class='tableRegistroSearch asistencia-docente-row' border='0' cellspacing='0' cellpadding='0'>
                <tr id='tbSelecRegistro'>
                    <td id='td_id_1' style='display:none;'>" . html_asistencia_docente($iddocente_catedra) . "</td>
                    <td id='td_id_2' style='display:none;'>" . html_asistencia_docente($idasistencia_docente) . "</td>
                    <td id='td_datos_1' style='width:8%;'>" . html_asistencia_docente($curso) . "</td>
                    <td id='td_datos_2' style='width:12%;'>" . html_asistencia_docente($nombreCarrera) . "</td>
                    <td id='td_datos_3' style='width:12%;'>" . html_asistencia_docente($nombreMateria) . "</td>
                    <td id='td_datos_4' style='width:15%;'>" . html_asistencia_docente($nombreapellido) . "</td>
                    <td id='td_datos_5' style='width:7%;'>" . html_asistencia_docente($dias) . "</td>
                    <td id='td_datos_6' style='width:7%;'>" . html_asistencia_docente($horario) . "</td>
                    <td id='td_datos_7' style='width:6%;'>" . html_asistencia_docente($turno) . "</td>
                    <td id='td_datos_8' style='width:5%;'>" . html_asistencia_docente($seccion) . "</td>
                    <td id='td_datos_9' style='width:9%;'>
                        <select class='inputText asistencia-docente-select' id='inptEstadoAsistenciaDocente_" . html_asistencia_docente($iddocente_catedra) . "'>
                            <option value='Pendiente' " . $estadoPendiente . ">Pendiente</option>
                            <option value='Presente' " . $estadoPresente . ">Presente</option>
                            <option value='Ausente' " . $estadoAusente . ">Ausente</option>
                            <option value='Tarde' " . $estadoTarde . ">Tarde</option>
                            <option value='Justificado' " . $estadoJustificado . ">Justificado</option>
                            <option value='Suspendido' " . $estadoSuspendido . ">Suspendido</option>
                        </select>
                    </td>
                    <td id='td_datos_10' style='width:6%;'>
                        <input type='time' class='inputText asistencia-docente-time' id='inptEntradaAsistenciaDocente_" . html_asistencia_docente($iddocente_catedra) . "' value='" . html_asistencia_docente($hora_entrada) . "' />
                    </td>
                    <td id='td_datos_11' style='width:6%;'>
                        <input type='time' class='inputText asistencia-docente-time' id='inptSalidaAsistenciaDocente_" . html_asistencia_docente($iddocente_catedra) . "' value='" . html_asistencia_docente($hora_salida) . "' />
                    </td>
                    <td id='td_datos_12' style='width:10%;'>
                        <input type='text' class='inputText asistencia-docente-observacion' id='inptObsAsistenciaDocente_" . html_asistencia_docente($iddocente_catedra) . "' value='" . html_asistencia_docente($observacion) . "' />
                    </td>
                    <td id='td_datos_13' style='width:7%;'>
                        <input type='button' value='Guardar' class='btn4' onclick='RegistrarAsistenciaDocente(\"" . html_asistencia_docente($iddocente_catedra) . "\")' />
                    </td>
                    <td id='td_datos_14' style='display:none;'>" . html_asistencia_docente($nombrefilial) . "</td>
                    <td id='td_datos_15' style='display:none;'>" . html_asistencia_docente($anho) . "</td>
                    <td id='td_datos_16' style='display:none;'>" . html_asistencia_docente($semestre) . "</td>
                </tr>
            </table>";
        }
    }

    mysqli_close($mysqli);

    $informacion = array(
        "1" => "exito",
        "2" => $pagina,
        "3" => $total,
        "4" => count($grados),
        "5" => count($docentes),
        "6" => $pendientes,
        "7" => $diaSemana
    );
    echo json_encode($informacion);
    exit;
}

function guardar_asistencia_docente($user, $iddocente_catedra, $fecha, $estado_asistencia, $hora_entrada, $hora_salida, $observacion)
{
    if ($iddocente_catedra == "" || $fecha == "" || $estado_asistencia == "") {
        $informacion = array("1" => "DI");
        echo json_encode($informacion);
        exit;
    }

    if (dia_semana_asistencia_docente($fecha) == "") {
        $informacion = array("1" => "DI");
        echo json_encode($informacion);
        exit;
    }

    $mysqli = conectar_al_servidor();
    asegurar_tabla_asistencia_docente($mysqli);

    $consulta = "SELECT count(*) FROM docente_catedra WHERE iddocente_catedra = ? AND estado = 'Activo'";
    $stmt = $mysqli->prepare($consulta);
    $parametros = array($iddocente_catedra);
    bind_asistencia_docente($stmt, "s", $parametros);
    if (!$stmt->execute()) {
        mysqli_close($mysqli);
        $informacion = array("1" => "error");
        echo json_encode($informacion);
        exit;
    }
    $cantidad = 0;
    $stmt->bind_result($cantidad);
    while ($stmt->fetch()) {
        $cantidad = $cantidad;
    }

    if ($cantidad == 0) {
        mysqli_close($mysqli);
        $informacion = array("1" => "DI");
        echo json_encode($informacion);
        exit;
    }

    $consulta = "INSERT INTO asistencia_docente
        (iddocente_catedraFK, fecha, estado_asistencia, hora_entrada, hora_salida, observacion, cod_usuario, editadopor)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        estado_asistencia = VALUES(estado_asistencia),
        hora_entrada = VALUES(hora_entrada),
        hora_salida = VALUES(hora_salida),
        observacion = VALUES(observacion),
        editadopor = VALUES(editadopor),
        fechaedit = CURRENT_TIMESTAMP";

    $stmt = $mysqli->prepare($consulta);
    $parametros = array($iddocente_catedra, $fecha, $estado_asistencia, $hora_entrada, $hora_salida, $observacion, $user, $user);
    bind_asistencia_docente($stmt, "ssssssss", $parametros);

    if (!$stmt->execute()) {
        mysqli_close($mysqli);
        $informacion = array("1" => "error");
        echo json_encode($informacion);
        exit;
    }

    mysqli_close($mysqli);
    $informacion = array("1" => "exito");
    echo json_encode($informacion);
    exit;
}

verificar($funt);
?>
