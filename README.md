# crop_calculator
Calculadora de cultivos de DLV.

La intención es crear una calculadora que indique el coste y beneficio del plantar el cultivo seleccionado,
además de otros datos.

Hay declarada una array de objetos (cropInfo) que contiene todos los cultivos y la información necesaria.

Los objetivos son los siguientes:

1. Al seleccionar el desplegable <select>, elegir un cultivo disponible y que se muestre su imagen en el recuadro blanco (<div id="marco"><\div>).

2. Al introducir un número en el <input>, coger ese número y almacenarlo.

3. Al clickar el botón "CALCULAR" se debe mostrar en el elemento <div id="results"><\div> lo siguiente:

    - Un string "Coste del cultivo" seguido de -> El resultado de la operación del número introducido x el valor de seedPrice: del cultivo seleccionado.
    
    - Un string "Beneficio neto" seguido de -> El resultado de la operación del número introducido x el valor de sellPrice: del cultivo seleccionado menos
      el coste del cultivo.
      
    - Un string "Tiempo de cultivo" seguido de -> El valor de time: del cultivo seleccionado en horas (si el valor es >=1 o en minutos si el valor es <1).
    
    - Un string "Zona de cultivo" seguido de -> El valor de location:
    
    - Un string "Nº de riegos" seguido de -> El valor de waters:

