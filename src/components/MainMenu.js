import MainMenuItem from "./MainMenuItem";

import customers_icon from '../images/customers-icon-29.png';
import deals_icon from '../images/deal-icon.png';
import payments_icon from '../images/payment-icon.png';
import stats_icon from '../images/statistics.png'
import import_icon from '../images/import-icon.png';
import settings_icon from '../images/settings-icon.png';

import { useNavigate } from 'react-router-dom';


export default function MainMenu(props) {

    const navigate = useNavigate();
    const mainMenuItems = [
        {title :`clientes`,icon: customers_icon},
        {title :`acordos`,icon:deals_icon},
        {title :`pagamentos`,icon:payments_icon},
        {title :`estatisticas`,icon:stats_icon},
        {title :`importacao`,icon:import_icon},
        {title :`configuracoes`,icon:settings_icon}
    ];

    const handleRouteClick = (path) => {
        console.log(path);
        navigate(path);
        console.log('Redirect');        
    };

    const mainMenuItemElements = mainMenuItems.map((i,index) => (
    <MainMenuItem 
        title={i.title} 
        icon={i.icon}
        key={index}
        onClick={() => handleRouteClick(i.title)}
    />));
        

    return (
    <>
        <div className="main">
            <div className="main--grid">
                {mainMenuItemElements}                        
            </div>
        </div>
    </>);
}