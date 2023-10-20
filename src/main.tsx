import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './redux/store.tsx';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import FirstQuestion from './pages/FirstQuestion';
import SecondQuestion from './pages/SecondQuestion';
import ThirdQuesetion from './pages/ThirdQuestion';
import Home from './pages/Home';
import FormTodo from './pages/ThirdQuestion/FormTodo.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error Page 404</div>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/first-question',
                element: <FirstQuestion />
            },
            {
                path: '/second-question',
                element: <SecondQuestion />
            },
            {
                path: '/third-question',
                element: <Outlet />,
                errorElement: <div>Error Page 404</div>,
                children: [
                    {
                        path: '/third-question',
                        element: <ThirdQuesetion />
                    },
                    {
                        path: '/third-question/add',
                        element: <FormTodo />
                    },
                    {
                        path: '/third-question/:id',
                        element: <FormTodo />
                    }
                ]
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)