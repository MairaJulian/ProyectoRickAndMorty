import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useUserForm } from './../../hooks/Custom.hooks';


const UserForm = () => {

    const {form, setForm, handleChanges} = useUserForm()

    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [areEquals, setAreEquals] = useState(false)
    const [email, setEmail] = useState("")

    
    
    useEffect(() => {
        console.log("holaa");
        console.log(password1);
        console.log(password2);
        if (password1 != "" && password2 != "" && email != "") {
            setAreEquals(password1 === password2)
        }
        
    }, [password1, password2, email])
    
    
    // useEffect(() => {
    //     console.log("soy un areEquals");
    //     console.log(areEquals);
      
    // }, [areEquals])
    
    
    // const [areEquals, setAreEquals] = useState(true)
    // //este hook se va a encargar de ver si los password son iguales
    // const [passwordConfirmation, setPasswordConfirmation] = useState()
    // //este hook se va a encargar de atrapar la clave confirmada

    // const handlePasswordConfirmation = (evento) => {
    //     setPasswordConfirmation(evento.target.value)
    // }

    // useEffect(() => {

    //     const {password} = form;
    //     setAreEquals(password === passwordConfirmation)
      
    // }, [passwordConfirmation])
    
    
    // const handleSubmit = (evento) => {
    //     evento.preventDefault();
    //     //preventDefaul previene que no se recargue la página al hacer click en registrarme
    //     // UserService.save(form)  //de esta forma enviamos al formulario al servicio de usuario
    //     console.log(form);
    // }
    // //esta funcion se va a encargar de atrapar el envío del formulario

    return (
        <div className='w-25 mx-auto mt-5'>
            <body className="text-center">
                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Humano Registrate</h1>

                        <div className="form-floating">
                            <input onChange={({target})=>{setEmail(target.value);}} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating">
                            <input onChange={({target})=>{setPassword1(target.value);}} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating">
                            <input onChange={({target})=>{setPassword2(target.value);}} type="password" className="form-control" id="floatingPassword" placeholder="Repetir Password" />
                            <label for="floatingPassword">Confirmar Password</label>
                        </div>

                        {!areEquals && (
                            <div className='form-text list-group-item-danger'>
                                Las claves no son iguales
                            </div>
                        )}

                        {/* <button disabled={!areEquals} className="w-100 btn btn-lg btn-primary" type="submit"> */}
                            <Link to={`/`} type="button" disabled={!areEquals} className="w-100 btn btn-lg btn-primary">
                                Registrarme
                            </Link>
                        {/* </button> */}
                        {/* <Link to={`/`} type="button" disabled={!areEquals} className="btn btn-sm btn-outline-secondary">
                            Registrarme
                        </Link> */}
                    </form>
                </main>
            </body>
        </div>
  )
}

export default UserForm
