import { ToastContainer, toast } from 'react-toastify';
import { send } from 'emailjs-com';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const Loading = "Cargando...";

    const onSubmit = handleSubmit((data) => {

        const id = toast(Loading, { autoClose: false });

        reset();

        send('service_nl43b6p', 'template_lvbup3j', data, 'user_MwVjL23I0fqf1C3NcuqWU')
            .then(function (response) {
                toast.update(id, { render: response.text, type: toast.TYPE.SUCCESS, autoClose: 5000, className: 'animate__animated animate__flipInY' });
            }, function (err) {
                console.log(err);
                toast.update(id, { render: err.text, type: toast.TYPE.ERROR, autoClose: 5000, className: 'animate__animated animate__flipInY' });
            });

    });

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <input
                            type="name"
                            maxLength={50}
                            className="form-control form-control-lg mt-3"
                            autoComplete="off"
                            placeholder="Tu nombre"
                            {...register("name",
                                {
                                    required: "El nombre es obligatorio.",
                                    maxLength: {
                                        value: 50,
                                        message: "El nombre no debe exceder los 50 caracteres."
                                    }
                                }
                            )}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {
                            errors.name
                            &&
                            <small role="alert" className='text-danger'>
                                {errors.name?.message}
                            </small>
                        }
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="email"
                            className="form-control form-control-lg mt-3"
                            autoComplete="off"
                            placeholder="Tu correo electrónico"
                            {...register("email",
                                {
                                    required: "El correo electrónico es obligatorio.",
                                    pattern: {
                                        value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                                        message: "Esta no es una dirección de correo electrónico valida."
                                    }
                                }
                            )}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {
                            errors.email
                            &&
                            <small role="alert" className='text-danger'>
                                {errors.email?.message}
                            </small>
                        }
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="text"
                            maxLength={50}
                            className="form-control form-control-lg mt-3"
                            autoComplete="off" placeholder="Tu asunto"
                            {...register("subject",
                                {
                                    required: "El asunto es obligatorio.",
                                    maxLength: {
                                        value: 50,
                                        message: "El asunto no debe exceder los 50 caracteres."
                                    }
                                }
                            )}
                            aria-invalid={errors.subject ? "true" : "false"}
                        />
                        {
                            errors.subject
                            &&
                            <small role="alert" className='text-danger'>
                                {errors.subject?.message}
                            </small>
                        }
                        <textarea
                            name="message"
                            maxLength={300}
                            className="form-control form-control-lg mt-3"
                            autoComplete="off"
                            placeholder="Tu mensaje"
                            rows="3"
                            {...register("message",
                                {
                                    required: "El mensaje es obligatorio.",
                                    maxLength: {
                                        value: 300,
                                        message: "El mensaje no debe exceder los 300 caracteres."
                                    }
                                }
                            )}
                            aria-invalid={errors.message ? "true" : "false"}
                        >
                        </textarea>
                        {
                            errors.message
                            &&
                            <small role="alert" className='text-danger'>
                                {errors.message?.message}
                            </small>
                        }
                        <div className="text-md-start text-center">
                            <button type="submit" className="btn btn-outline-danger btn-lg my-3 px-5">Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer position="top-center" theme="dark" />
        </>
    )
}
