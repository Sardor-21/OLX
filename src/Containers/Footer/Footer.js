import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <Link className={"mb-3"} to={'/mobileapps'}>Мобильные приложения</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Помощь</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Платные услуги</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Бизнес на OLX</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Реклама на сайте</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Условия использования</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Политика конфиденциальности</Link>
                        <Link className={"mb-3"} to={'/mobileapps'}>Партнёры</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
