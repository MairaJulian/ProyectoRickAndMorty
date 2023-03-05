import {useState} from 'react'

export const useUserForm = (estadoInicial = {}) => {

    const [form, setForm] = useState(estadoInicial);

    const handleChanges = ({target}) => {
        const {name, value} = target
        console.log("===>"+name);
        console.log("==>"+value);

        setForm({
            ...form,
            [name]: value,
        })

    }
    return {
        form, setForm, handleChanges
    }

}