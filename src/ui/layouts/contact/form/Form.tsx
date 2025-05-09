import "./Form.css"
import { useFormHook } from "./use-form-hook";

export const Form = () => {

    const {
        formSpanText,
        watchedName,
        watchedEmail,
        watchedPhone,
        watchedMessage,
        nameRules,
        emailRules,
        phoneRules,
        messageRules,
        onSubmit,
        register,
        handleSubmit,
        errors,
        isSubmitting
    } = useFormHook();
      
    return (
        <div className="container-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                <span
                className={`${errors?.name?.message ? 'span-error' : ''} ${watchedName && !errors?.name?.message ? 'span-valid' : ''}`}
                >
                {formSpanText.name}
                </span>
                <input
                className={errors?.name?.message ? 'input-error' : (watchedName && !errors?.name?.message ? 'input-valid' : '')}
                type="text"
                id="name"
                {...register('name', nameRules)}
                />
            </label>
            <label htmlFor="email">
                <span
                className={`${errors?.email?.message ? 'span-error' : ''} ${watchedEmail && !errors?.email?.message ? 'span-valid' : ''}`}
                >
                {formSpanText.email}
                </span>
                <input
                className={errors?.email?.message ? 'input-error' : (watchedEmail && !errors?.email?.message ? 'input-valid' : '')}
                type="email"
                id="email"
                {...register('email', emailRules)}
                />
            </label>
            <label htmlFor="phone">
                <span
                className={`${errors?.phone?.message ? 'span-error' : ''} ${watchedPhone && !errors?.phone?.message ? 'span-valid' : ''}`}
                >
                {formSpanText.phone}
                </span>
                <input
                className={errors?.phone?.message ? 'input-error' : (watchedPhone && !errors?.phone?.message ? 'input-valid' : '')}
                type="text"
                id="phone"
                {...register('phone', phoneRules)}
                />
            </label>
            <label htmlFor="message">
                <span
                className={`${errors?.message?.message ? 'span-error-textarea' : ''} ${watchedMessage && !errors?.message?.message ? 'span-valid-textarea' : ''}`}
                >
                {formSpanText.message}
                </span>
                <textarea
                className={errors?.message?.message ? 'input-error-textarea' : (watchedMessage && !errors?.message?.message ? 'input-valid-textarea' : '')}
                id="message"
                {...register('message', messageRules)}
                ></textarea>
            </label>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
            </form>
        </div>
    )
}