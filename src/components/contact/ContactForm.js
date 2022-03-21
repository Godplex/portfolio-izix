import { ToastContainer, toast } from 'react-toastify';
import { send } from 'emailjs-com';
import { useState } from 'react';

export const ContactForm = () => {

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const resetForm = () => {
        setToSend({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const Loading = "Cargando...";
    const ValidateEmail = "Esto no es una dirección de correo electrónico valida";
    const ValidateForm = "No puede haber camos vacios.";

    const onSubmit = (e) => {
        e.preventDefault();

        if (toSend.name && toSend.email && toSend.subject && toSend.message) {

            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (pattern.test(toSend.email)) {

                const id = toast(Loading, { autoClose: false });

                resetForm();


                send('service_nl43b6p', 'template_lvbup3j', toSend, 'user_MwVjL23I0fqf1C3NcuqWU')
                    .then(function (response) {
                        toast.update(id, { render: response.text, type: toast.TYPE.SUCCESS, autoClose: 5000, className: 'animate__animated animate__flipInY' });
                    }, function (err) {
                        console.log(err);
                        toast.update(id, { render: err.text, type: toast.TYPE.ERROR, autoClose: 5000, className: 'animate__animated animate__flipInY' });
                    });

            } else {
                toast.error(ValidateEmail);
            }

        } else {
            toast.error(ValidateForm);
        }

    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <input type="name" name="name" maxLength={50} className="form-control form-control-lg mt-3" autoComplete="off" placeholder="Tu nombre" value={toSend.name} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" name="email" className="form-control form-control-lg mt-3" autoComplete="off" placeholder="Tu correo electrónico" value={toSend.email} onChange={handleChange} required />
                    </div>
                    <div className="col-lg-12">
                        <input type="text" name="subject" maxLength={50} className="form-control form-control-lg mt-3" autoComplete="off" placeholder="Tu asunto" value={toSend.subject} onChange={handleChange} required />
                        <textarea name="message" maxLength={300} className="form-control form-control-lg mt-3" autoComplete="off" placeholder="Tu mensaje" rows="3" value={toSend.message} onChange={handleChange} required></textarea>
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
