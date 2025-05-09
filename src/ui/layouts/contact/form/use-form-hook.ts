import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface formSpanText {
    email: string;
    name: string;
    phone: string;
    message: string;
}

export const useFormHook = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, trigger, watch } = useForm();
    const [formSpanText] = useState<formSpanText>({ 
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono",
        message: "Escríbeme",
    });
    const watchedName = watch("name");
    const watchedEmail = watch("email");
    const watchedPhone = watch("phone");
    const watchedMessage = watch("message");

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('https://formspree.io/f/xanekeny', data);

            if (response.status === 200) {
                reset();
                alert(`¡Gracias por escribirme! Te contactaré lo más pronto posible, ${data.name}.`);
            } else {
                alert('Hubo un error al enviar el formulario. error: ' + JSON.stringify(errors)); // Muestra los errores en formato JSON para depuración
            }
        } catch (error) {
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    const nameRules = {
        required: 'El nombre es requerido',
        onChange: () => {
            trigger('name');
        },
        onBlur: () => trigger('name'),
    };

    const emailRules = {
        required: 'El correo es requerido',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'El correo electrónico no es válido',
        },
        onChange: () => {
            trigger('email');
        },
        onBlur: () => trigger('email'),
    };

    const phoneRules = {
        required: 'El teléfono es requerido',
        pattern: {
            value: /^[0-9]+$/,
            message: 'El teléfono debe contener solo números',
        },
        maxLength: {
            value: 100,
            message: 'El teléfono debe tener al menos 7 dígitos',
        },
        onChange: () => {
            trigger('phone');
        },
        onBlur: () => trigger('phone'),
    };

    const messageRules = {
        required: 'El mensaje es requerido',
        minLength: {
            value: 10,
            message: 'El mensaje debe tener al menos 10 caracteres',
        },
        onChange: () => {
            trigger('message');
        },
        onBlur: () => trigger('message'),
    };

    return {
        formSpanText,
        nameRules,
        emailRules,
        phoneRules,
        messageRules,
        watchedName,
        watchedEmail,
        watchedPhone,
        watchedMessage,
        register,
        handleSubmit,
        isSubmitting,
        onSubmit,
        errors
    }
}