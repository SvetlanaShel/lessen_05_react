import './styles.css'
import { VipCardStyle,  RegularCardStyle, TitleCard, AvatarImg } from './styles'
import Avatar2 from '../../../../assets/Avatar2.jpg'

function Homework09() { 

    return (
        <div className="homework09-container">
            <h1>Styling components</h1>
          <VipCardStyle>
            <TitleCard>Vip Пользователь</TitleCard>
            <p>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка</p>
            <AvatarImg src={Avatar2}/>
            </VipCardStyle> 
          <RegularCardStyle>
            <TitleCard> Обычный Пользователь</TitleCard>
            <p>Стандартный доступ, базовые функции и поддержка в порядке очереди</p>
            </RegularCardStyle>  
        </div>
    )
}


export default Homework09

//add comment