$(document).ready(function() {

    $("#formulario").validate({

        rules: {

            nombre: "required",
            edad: "required",
            sLaboral: {
                required: true,
                minLength: 1

            },
            sueldo: {
                required: true,
                minlength: 5
            }


        },
        messages: {

            nombre: "introduce tu nombre",
            edad: "introduce tu edad",
            sueldo: {

                required: "introduce tu sueldo",
                minlength: "el salario debe de tener minimo 5 numeros"

            },
            sLaboral: {
                minlength: "la situación laboral no puede estgar en blanco"
            }


        },
        submitHandler: function(form) {
            form.submit();
        }





    });
    var nombre = "";
    var edad = "";
    var situacion = "";
    var salario = "";
    $(function() {
        $.datepicker.setDefaults($.datepicker.regional["es"]);
        $("#datepicker").datepicker({
            format: 'dd/mm/yyyy',
            closeText: 'Cerrar',

            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
            ],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            firstDay: 1,
            onSelect: function(selecteddate, ui) {

                var date = new Date(selecteddate);
                var datedef = date.setDate(date.getDate() + 1)

                $("#enviar").click(function(event) {
                    event.preventDefault();
                    var validado = $("#formulario").valid();

                    if (validado) {

                        alert($("#nombre").val());
                        nombre = $("#nombre").val();

                        $("#name").text($("#nombre").val());

                        $("#age").text($("#edad").val());
                        edad = $("#edad").val();
                        $("#situacion").text($("#sLaboral").val());
                        situacion = $("#sLaboral").val();
                        $("#salario").text($("#sueldo").val());
                        salario = $("#sueldo").val();
                        console.log(date); ///fecha formato 

                        console.log(datedef); ///fecha en milisegundos

                        let day = String(date.getDate() - 1);
                        let month = String(date.getMonth() + 1);
                        let year = String(date.getFullYear());

                        var fulldate = day + '/' + month + '/' + year;

                        $("#fnacimiento").text(fulldate);


                        console.log(datedef); ///fecha seleccionada en milisegundos
                        var actualenmilisegundos = Date.now();
                        var edadenmilisegundos = actualenmilisegundos - datedef;

                        var segundos = 1000;
                        var minutos = segundos * 60;
                        var hora = minutos * 60;
                        var dia = hora * 24;
                        var mes = dia * 30;
                        var año = dia * 365;

                        var años = Math.round(edadenmilisegundos / año);
                        var meses = años * 12;
                        var dias = años * 365;

                        var horas = Math.round(edadenmilisegundos / hora);
                        var segundos = Math.round(edadenmilisegundos / segundos);
                        var today = new Date();
                        age = today.getFullYear() - ui.selectedYear;
                        console.log(age);
                        $("#calculatedage").val(age);
                        if ($("#calculatedage").val() > $("#edad").val()) {

                            $("#mensaje").text("eres más viejod e lop que piensas");
                        } else if ($("#calculatedage").val() < $("#edad").val()) {

                            $("#mensaje").text("eres más joven de lo que piensas");

                        }

                        $("#edadotramanera").val(años);
                        $("#toPDF").click(function(event) {

                            var doc = new jsPDF();
                            var elementHTML = $('#resultados').html();
                            var specialElementHandlers = {
                                '#elementH': function(element, renderer) {
                                    return true;
                                }
                            };
                            doc.fromHTML(elementHTML, 15, 15, {
                                'width': 170,
                                'elementHandlers': specialElementHandlers
                            });

                            // Save the PDF
                            doc.save('sample-document.pdf');
                        });
                        $("#toexcel").click(function(event) {
                            $('table').tblToExcel();


                        })

                    } else {

                        alert("no se ha enviado");

                    }
                });

            },
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+100"

        });

    });





});