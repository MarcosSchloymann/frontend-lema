import React from 'react'

const Preguntas = () => {
  return (
    <div className='container pb-5'>
      <div className='text-center'>
        <h1 className='text-white'>
          Preguntas Frecuentes
        </h1>

        <br/>
      </div>

      <div className="accordion pb-5" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button item-pregunta btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              ¿Cuánto es la compra mínima que puedo realizar?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Se puede comprar la cantidad que se desee.</strong> 
              <br />
              Cuando las compras no superen la cantidad de 15 unidades <strong> el envío queda a cargo del comprador.</strong> 
              <br />
              Existen dos posibilidades cuando la compra es minorista, el comprador puede abonar el envío, o esperar que salga un envío a su localidad.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ¿Realizan envíos a todo el país?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Si, se realizan envíos a todo el país.</strong> 
              <br /> 
              Para mejor asesoramiento, podes comunicarte por nosotros vía whatsapp.
              <br />
              <strong>Se realizan envíos a cualquier punto del país sin valor adicional</strong>
              , siempre y cuando la compra haya superado la cantidad mínima de 15 prendas.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ¿El diseño tiene un costo?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Los diseños se realizan gratuitamente.</strong> 
              <br />
              Si nos cuentan sus ideas, nosotros les ofrecemos propuestas sobre las que se puede trabajar,
              si no tienen una idea en mente, nos pueden facilitar los colores, el escudo, nombre de su club,
              contarnos si desean colocar nombres, números y sponsors, y nosotros les ofrecemos propuestas.
              <br />
              <strong>El diseño es gratis</strong>, se pueden realizar hasta 3 modificaciones de la propuesta seleccionada,
               superadas estas modificaciones, se cobrará un adicional por modificaciones.
            </div>
          </div>
        </div>

      <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              ¿Cuánto debo abonar para comenzar la confección?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Para comenzar la confección de las prendas con el diseño seleccionado,
              <strong>se debe abonar el 60% del total.</strong> 
              <br />
              Una vez definido el diseño, se les enviará una tabla de talles y una planilla de pedido,
              es importante que esta se complete correctamente para evitar errores de tipeo y confección.
              <br /> 
               <strong>Una vez enviada la planilla de pedido completa, se les realizará el presupuesto del cual se deberá abonar el 60%</strong>
               , el 40% restante se abonará al recibir el pedido.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              ¿Cuánto tiempo toma en llegar mi compra?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>El tiempo de espera para recibir la compra es de 21 días.</strong> 
              <br />
              Es importante tener en cuenta que los 21 días comienzan a contar una vez definido el diseño,
              completado la tabla de pedido y realizada la seña del 60%.
              <br />
              <strong>La confección se envía con empresas de enconmiendas que podrían presentar demoras</strong>
              , esta demora que pudiera ser adicional es agena a LEMA SPORT.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              ¿Que hago si hay probemas con mi compra?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Ante cualquier inconveniente, comunicate inmediatamente con nosotros vía whatsapp.</strong> 
             <br />
             Por cualquier desperfecto en tu compra, podes comunicarte con nosotros con tu queja, 
             y vamos a darle una solución.
             <br />
              Es importante tener en cuenta que  
              <strong> las quejas y reclamos serán válidos</strong> si se comprueba el error con el diseño, y la planilla de compra.
              
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              ¿Cómo debo abonar mi compra?
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Las compras se abonan mediante transferencia.</strong> 
              Hay algunas localidades en las que se puede abonar con efectivo, consulte a nuestro venedor.
              <br />
              <strong>Trabajamos con mercado pago</strong>
              , lo que permite abonar con tarjeta o financiar mediante la aplicación.
            </div>
          </div>
        </div>
      </div>

{/* <div>
  <h1 className="text-center text-white">¿Cómo completar la planilla de compra?</h1>
  <div className="row">
    <div className="col-6">
      <p className='text-center text-white'>
        Es importante completar todos los campos de la planilla.
        <br />

      </p>
    </div>
    <div className="col-6"></div>
  </div>
</div> */}
      
    </div>
  )
}

export default Preguntas