import { Feather } from  '@expo/vector-icons'
import { View } from 'react-native';
import {styles, triggerStyles,optionsStyles,optionStyles} from '../styles.js'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';


export function SongMenu (props) {
    if(props.ShowMenu){
        return(
            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <Feather name='more-vertical' style={styles.songMenu}/>
                </MenuTrigger> 
                <MenuOptions customStyles={optionsStyles}>
                <MenuOption onSelect={() => alert(`Not called`)} text='Играть' customStyles={optionStyles} /> 
                    <MenuOption onSelect={() => alert(`Save`)} text='Скачать' customStyles={optionStyles}/>
                    <MenuOption onSelect={() => alert(`Delete`)} text='Сохранить в кэш' customStyles={optionStyles}/>
                    <MenuOption onSelect={() => alert(`Not called`)} text='Показать текст' customStyles={optionStyles} />
                    <MenuOption onSelect={() => alert(`Save`)} text='Искать исполнителя' customStyles={optionStyles}/>
                    <MenuOption onSelect={() => alert(`Delete`)} text={props.Screen === 'Library' ? 'Удалить' : 'Добавить в альбом'} customStyles={optionStyles}/>          
                </MenuOptions>
            </Menu>
        )
    } return(<View/>)
    
};


