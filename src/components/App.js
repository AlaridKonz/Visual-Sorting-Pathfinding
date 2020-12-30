import { ReactComponent as maze } from '../svg/maze.svg'
import './styles/App.css'
import SvgUI from '../svg/SvgUI'
import Default from './Default'
import {
    Toys,
    ChevronLeft as ChevronLeftIcon,
    BarChart as BarChartIcon,
    Person as PersonIcon,
} from '@material-ui/icons'
import {
    Button,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
} from '@material-ui/core'
import { useState } from 'react'

const Header = (props) => (
    <div className="App-header">
        <Button onClick={props.handleDrawerOpen} style={{ margin: '5px' }}>
            <Toys className="App-logo c-primary" alt="logo" />
        </Button>
        {props.children}
    </div>
)

const Sidebar = (props) => {
    const { open, handleDrawerClose } = props
    const items = [
        {
            text: 'Sorting',
            icon: <SvgUI Icon={BarChartIcon} viewBox="5 5 14 14" />,
        },
        {
            text: 'Pathfinding',
            icon: <SvgUI Icon={maze} viewBox="0 0 512 512" />,
        },
    ]
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            PaperProps={{
                style: { backgroundColor: '#353b45', color: 'white' },
            }}
        >
            <div>
                <Button
                    onClick={handleDrawerClose}
                    style={{ color: 'white', width: '100%' }}
                    children={<ChevronLeftIcon />}
                />
            </div>
            <Divider />
            <List>
                {items.map(({ text, icon }) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <SvgUI Icon={PersonIcon} viewBox="2.3 2.3 19.4 19.4" />
                    </ListItemIcon>
                    <ListItemText primary="About me" />
                </ListItem>
            </List>
        </Drawer>
    )
}

const App = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="App">
            <div className="App-content">
                <Header
                    handleDrawerOpen={() => {
                        setOpen(true)
                    }}
                >
                    Visual Sorting & Pathfinding
                </Header>
                <Default />
                {
                    //Route for other pages
                }
            </div>
            <Sidebar
                open={open}
                handleDrawerClose={() => {
                    setOpen(false)
                }}
            ></Sidebar>
        </div>
    )
}

export default App
