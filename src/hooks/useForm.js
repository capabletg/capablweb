import { useEffect, useState } from "react";

export default function useForm(initialState = {}) {
    const [formState, setFormState] = useState({ ...initialState });

    const handleFormState = (name, value) => (!!name ? setFormState((prev) => ({ ...prev, [name]: value })) : {});
    const resetFormState = () => setFormState({ ...initialState });
    const forceResetFormState = (state) => setFormState({ ...state });

    useEffect(() => {
        resetFormState();
    }, []);

    return [formState, handleFormState, resetFormState, forceResetFormState];
}
