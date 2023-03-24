import MainMenu from '../components/MainMenu';
import App from '../App';
import Acordos from './Acordos';
import AcordoDetalhe from './AcordoDetalhe';
import Clientes from './Clientes';
import ClienteDetalhe from './ClienteDetalhe';
import Configuracoes from './Configuracoes';
import Estatisticas from './Estatisticas';
import Importacao from './Importacao';
import Pagamentos from './Pagamentos';
import ErrorPage from '../components/ErrorPage';
import { createBrowserRouter ,Navigate } from 'react-router-dom';

export default function AthenaRouter() {
    const router = createBrowserRouter([
        {
          path:'/', 
          element:<App/>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
            {
              path:'/', element:<MainMenu/>
            },
            {
              path:'/clientes', element:<Clientes/>
            },
            {
              path:'/acordos', element:<Acordos/>
            },
            {
                path:'/pagamentos', element:<Pagamentos/>
            },
            {
              path:'/estatisticas', element:<Estatisticas/>
            },
            {
              path:'/importacao', element:<Importacao/>
            },
           
            {
              path:'/configuracoes', element:<Configuracoes/>
            },
            //nested routes
            {
              path:'/cliente/:id',
              element: <ClienteDetalhe />
            },
            {
              path:'/cliente/:id',
              element: <AcordoDetalhe />
            },
            // 7 - navigate para páginas não existentes
            {
              path: "old",
              element: <Navigate to="/contact"/>
            }
          ]
        }
        
      ]);

      return router;
}