import { ItemContextProvider } from './ItemContext';
import Item from './Item';

const SecondQuestion = () => {
    return (
        <ItemContextProvider>
            <div id="main">
                <Item />
            </div>
        </ItemContextProvider>
    )
}

export default SecondQuestion