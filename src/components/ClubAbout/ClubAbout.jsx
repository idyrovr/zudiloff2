import './ClubAbout.scss'

import part1 from '../../assets/images/club/part1.png'
import part2 from '../../assets/images/club/part2.png'
import part3 from '../../assets/images/club/part3.png'
import part4 from '../../assets/images/club/part4.png'
import part5 from '../../assets/images/club/part5.png'
import part6 from '../../assets/images/club/part6.png'


export const ClubAbout = () => {
    return (
        <div className='clubabout'>
   
            <div className="container">
                <h2 className="clubabout__title">Что еще включает в себя подписка:</h2>
                <div className="clubabout__parts grid grid__col-4">
                    <div className="clubabout__part clubabout__part1 part d-flex flex-column align-center justify-end">
                        <div className="part__image">
                            <img src={part1} alt="" />
                        </div>
                        <p className="part__title">Выступление отдельных спикеров по разным направлениям</p>
                    </div>
                    <div className="clubabout__part clubabout__part2  part d-flex flex-column align-center justify-end">
                        <div className="part__image">
                            <img src={part2} alt="" />
                        </div>
                        <p className="part__title">Вебинары и АМА-сессии с ответами на вопросы
                        </p>
                    </div>
                    <div className="clubabout__part clubabout__part3  part d-flex flex-column align-center justify-end">
                        <div className="part__image part__image3">
                            <img src={part3} alt="" />
                        </div>
                        <p className="part__title">Совместное участие в криптоактивностях
                        </p>
                    </div>
                    <div className="clubabout__part clubabout__part4 part d-flex flex-column align-center justify-end">
                        <div className="part__image part__image4">
                            <img src={part4} alt="" />
                        </div>
                        <p className="part__title">Новые партнёры</p>
                    </div>
                    <div className="clubabout__part clubabout__part5 part d-flex flex-column align-center justify-end">
                        <div className="part__image">
                            <img src={part5} alt="" />
                        </div>
                        <p className="part__title">Конкурсы с денежными призами</p>
                    </div>
                    <div className="clubabout__part clubabout__part6 part d-flex flex-column align-center justify-end">
                        <div className="part__image">
                            <img src={part6} alt="" />
                        </div>
                        <p className="part__title">Нетворкинг и оффлайн встречи</p>
                    </div>
                </div>
            </div>
        </div>
    );
};