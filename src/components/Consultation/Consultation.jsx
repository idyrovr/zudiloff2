import './Consultation.scss'

import consultation__left from '../../assets/images/home/consultation__left.png'
import { ConsultationSvg1, ConsultationSvg2, ConsultationSvg3, ConsultationSvg4 } from '../Svgs/ConsultationSvg/ConsultationSvg';


export const Consultation = () => {
    return (
        <div className='consultation' id='/#cons'>
            <div className="container">
                <div className="consultation__content grid grid__col-6">
                    <div className="consultation__left">
                        <div className="consultation__image">
                            <img src={consultation__left} alt='etherium'></img>
                        </div>
                    </div>
                    <div className="consultation__right d-flex flex-column justify-left align-center">
                        <h2 className="consultation__title">Что вы получите на консультации?</h2>
                        <p className="consultation__desc">Вы можете быть уверены, что я не буду
                            тратить ваше время
                            на пустые разговоры.
                            Я предоставляю только четкую и полезную информацию, и если я не
                            обладаю необходимыми знаниями, я не принимаю
                            платную консультацию. <br></br><br></br>

                            Также, вы получаете возможность записывать консультации в Zoom
                            и задавать уточняющие
                            вопросы в личных сообщениях в течение некоторого времени после консультации.
                            Я ценю ваше время и стремлюсь обеспечить полное понимание после встречи.
                        </p>
                    </div>

                    <div className="consultation__left consultation__left2">
                        <div className="consultation__image">
                            <img src={consultation__left} alt='etherium'></img>
                        </div>
                    </div>

                </div>

               
            </div>

            <div className="consultation__about about grid grid__col-3">
                  <div className="about1 d-flex">
                    <ConsultationSvg1></ConsultationSvg1>
                    <p className="about__desc">НЕТ воды, только четкая информация по
                     вашим вопросам.</p>
                  </div>

                  <div className="about1 d-flex">
                   <ConsultationSvg2></ConsultationSvg2>
                    <p className="about__desc">Записи с консультаций Zoom остаются с вами навсегда.</p>
                  </div>
                  <div className="about1 d-flex">
                  <ConsultationSvg3></ConsultationSvg3>
                    <p className="about__desc">Вы получаете возможность задать все уточняющие вопросы.</p>
                  </div>
                  <div className="about1 d-flex">
                   <ConsultationSvg4></ConsultationSvg4>
                    <p className="about__desc">Моя главная цель - довести вас до плюсового результата.</p>
                  </div>

              
                </div>
        </div>
    );
};