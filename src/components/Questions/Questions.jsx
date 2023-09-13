import './Questions.scss'

import pseudo from '../../assets/images/home/pseudo.png'

import questions__backgrund from '../../assets/images/home/questions__background.png'
import questions__leftCircle from '../../assets/images/home/questions__leftElipse.png'

export const Questions = () => {
    return (
        <div className='questions'>
               <div className="question__leftCircle">
                    <img src={questions__leftCircle} alt="just jpeg" ></img>
                </div>
            <div className="container">
                <div className="background">
                    <img src={questions__backgrund}  alt = "just jpeg"></img>
                </div>
             
                <div className="questions__content d-flex">
                    <div className="questions__titleCover">
                        <h2 className="questions__title">С какими вопросами ко мне приходят люди на консультацию:</h2>
                    </div>

                    <div className="questions__list list grid grid__col-3">
                      
                        <div className="list__image">
                            <img src={pseudo} alt = "just jpeg"></img>
                            <p className="list__desc">Работа с Юмани, Киви и др ПС</p>
                        </div>

                        <div className="list__image">
                            <img src={pseudo} alt = "just jpeg"></img>
                            <p className="list__desc">Вывод с Киви и Юмани без комисссии</p>
                        </div>
 
                        <div className="list__image ">
                            <img src={pseudo} alt = "just jpeg"></img>
                            <p className="list__desc list__desc3">Банковская система в РФ , основные триггеры и
                             алгоритмы по срабатыванию блока по банкам РФ , обход блокировок</p>
                        </div>

                        <div className="list__image ">
                            <img src={pseudo} alt = "just jpeg"></img>
                            <p className="list__desc list__desc4">Работа по международке, Казахстан , 
                            Кыргызстан, Тай, Камбоджа, Вьетнам, Нигерия</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};