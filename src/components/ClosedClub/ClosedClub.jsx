import { NavLink } from 'react-router-dom';
import './ClosedClub.scss'

export const ClosedClub = () => {
  return (
     <div className='closedclub'>
        <div className="container d-flex flex-column align-center justify-center">
            <h2 className="closedclub__title">Что такое “Закрытый клуб”?</h2>
            <p className="closedclub__desc">В Закрытом Клубе собраны 
            все Профессиональные P2p-эксперты, в нём собраны все эксклюзивные материалы, которых нет в открытом доступе,  обсуждения с экспертами, совместный research и проработка новых стратегий в P2P, арбитраже и крипте и много др. 
эксклюзивных моментов.</p>
            <NavLink to="/club">          <button className="closedclub__btn">Узнать больше</button></NavLink>
  
        </div>
     </div>
   );
};