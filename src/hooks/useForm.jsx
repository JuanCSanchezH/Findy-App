import { useContext, useState } from "react";
import { AppContext } from "../routes/App";

const useForm = (initalValue = {}) => {

    const [dataForm, setDataForm] = useState(initalValue);

    const handleChangeComentInput = (event) => {
        const { name, value, files, type } = event.target;
        setDataForm({
            ...dataForm,
            [name]: type === 'file' ? files : value
        });
    }

    const reset = () => {
        setDataForm({});
    }

    return { dataForm, handleChangeInputs, reset }
}

export default useForm

export const useComentForm = (initalValue = {}) => {

    const [commentForm, setcomentForm] = useState(initalValue);
    const { userLogged } = useContext(AppContext);
    
    const handleChangeComentInput = (event) => {
        const { name, value} = event.target;
        setcomentForm({
            ...commentForm,
            userId: userLogged.userLogged.user.id,
            [name]: value
        });
    }

    return { commentForm, handleChangeComentInput}
}
