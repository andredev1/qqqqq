import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 410;
//Material UI styling
export const useStyles = makeStyles((theme) => ({
    //GLOBAL
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        marginTop: 67
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 67
    },
    login: {
        height: 2000,
        width: "100%",
        padding: 50,
        background: "linear-gradient(90deg, #4773B8 0%, rgba(57, 72, 158, 0.98) 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12)"
    },
    bold_text_white_blue_background: {
        color: '#FFFFFF',
        backgroundColor: "#4773B8 100%",
        borderColor: '#FFFFFF',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
   
    root_dashboard: {
        display: 'flex',
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    //TEXT
    button_text_white: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 20,
        marginBottom: 20,
        background: '#4d8fff',
        width: 200

    },
    bold_text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F'
    },
    bold_text_left_margin: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F',
        marginLeft: 15
    },
    bold_text_top_margin: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F',
        marginTop: 10
    },
    bold_text_red: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FF0000'
    },
    bold_text_amber: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FFBF00'
    },
    bold_text_right: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F',
        align: "right"
    },
    bold_error_text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'red'
    },
    bold_text_white: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FFFFFF'
    },
    logo_text_white: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FFFFFF',
        marginTop: -25,
        marginLeft: 120
    },
    standard_text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12
    },
    medium_text_bold: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F'
    },
    smaller_text_bold: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F'
    },
    center_text: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#15325F'
    },
    center_text_white: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FFFFFF'
    },
    //EXPANSION DRAWERS
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1,
        alignItems: 'center'

    },
    location_header: {
        display: 'flex',
        justifyContent: 'flex-start',
        background: "#e7edf4",
        flexGrow: 1,
        alignItems: 'center'

    },
    site_header: {
        background: "#e7edf4",
        marginBottom: 10
    },
    expansionpanel: {
        background: "#d9d9db",
        marginTop: 15,
        height: 35,

    },
    header_icon: {
        marginTop: 1,
        marginLeft: 10,

    },
    header_icon_white: {
        marginTop: 1,
        marginLeft: 10,
        color: '#FFFFFF'
    },
    header_text: {
        marginTop: 11,
        fontFamily: 'Open Sans',
        height: 33,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 12,
        color: '#15325F'

    },
    header_text_error: {
        marginTop: 11,
        fontFamily: 'Open Sans',
        height: 33,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 12,
        color: '#FF0000'

    },
    header_text_icons: {
        fontFamily: 'Open Sans',
        height: 33,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 12,
        color: '#15325F',
        lineHeight: "normal",
        marginTop: -10
    },
    header_text_white: {
        marginTop: 15,
        fontFamily: 'Open Sans',
        height: 33,
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 12,
        color: '#FFFFFF'
    },
    header_center_text_site: {
        textAlign: "center",
        fontFamily: 'Open Sans',
        width: "100%",
        fontSize: 12,
        fontWeight: 'bold',
        color: '#15325F',
        height: 14,
        margin: "auto",
        marginTop: -30
    },

    site_header_icon: {
        textAlign: "center",
        paddingTop: 35,
        margin: "auto",
        color: '#15325F',
        height: 100,
    },
    site_product_icon: {
        textAlign: "center",
        margin: "auto",
        color: '#15325F',
        height: 100,
    },
    header_center_text: {
        marginTop: -3,
        fontFamily: 'Open Sans',
        height: 33,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 12,
        color: '#15325F'
    },
    sub_header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    title_icon: {
        marginTop: 3,
        marginLeft: 10,
        display: 'flex',
        color: '#15325F',
        alignItems: 'center'
    },
    search_icon: {
        marginTop: 9,
        marginLeft: 13,
        display: 'flex',
        color: '#15325F',
        alignItems: 'center'
    },
    grab_icon: {
        cursor: 'grab',
        marginTop: 3,
        marginLeft: 10,
        display: 'flex',
        color: '#15325F',
        alignItems: 'center'
    },
    expansion_shelf: {
        cursor: 'grab',
        display: 'flex',
        width: '100%',
        height: 30,
        marginTop:2,
        marginBottom:2,
        justifyContent: 'space-between'

    },
    rule_expansion_shelf: {
        cursor: 'grab',
        display: 'flex',
        width: 850,
        minHeight: 30,
        marginTop:2,
        marginBottom:2,
        justifyContent: 'space-evenly'

    },
    sensor_expansion_shelf: {
        cursor: 'grab',
        display: 'flex',
        width: '100%',
        height: 25,
        justifyContent: 'space-between'

    },
    even_shelf: {
        cursor: 'grab',
        width: '100%',
        height: 38,
        padding: 5,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-evenly'

    },
    expansion_area: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'

    },
    rule_name: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '25%',
        justifyContent: 'flex-start'
    },
    rule_container: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '70%',
        justifyContent: 'space-between'
    },
    rule_item: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#6D809D',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
        paddingRight: 15,
    },
    rule_menu: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '5%',
        justifyContent: 'flex-end'
    },
    shelf_name: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '35%',
        justifyContent: 'flex-start'
    },
    shelf_container: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '60%',
        justifyContent: 'space-evenly'
    },
    shelf_item: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#6D809D',
        justifyContent: 'space-evenly'
    },
    shelf_image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shelf_menu: {
        display: 'flex',
        alignItems: 'center',
        color: '#6D809D',
        width: '20%',
        justifyContent: 'flex-end'
    },

    shelf_icon: {
        paddingRight: 20
    },
    site_icon: {
        height: 100,
        marginTop: 5
    },
    site_menu: {
        marginLeft: -15
    },
    product_icon: {
        height: 30

    },
    product_logo: {
        height: 150
    },
    //OTHER AREAS
    login_container: {
        width: 480,
        height: 520,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 35,
        background: "#1f316133",
        borderRadius: 10

    },
    icon_container: {
        width: 185,
        marginTop: 33,
        marginLeft: 18,
        display: 'flex',
        justifyContent: 'space-around'
    },
    instruction_text: {
        width: 185,
        marginTop: 12,
        marginLeft: 18,
        display: 'flex',
        justifyContent: 'space-around'
    },
    button_container: {
        marginTop: 24,
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'space-around'
    },
    row_container: {
        display: 'flex',
        justifyContent: 'space-around'
    },

    radio_container: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    modal_dialog: {
        margin: 'auto',
        maxWidth: 'md',
        fullWidth: true
    },
    modal_dialog_fixed: {
        margin: 'auto',
        minWidth: 680,
        minHeight: 480,
        fullWidth: true
    },
    modal_dialog_wide: {
        margin: 'auto',
        minWidth: 960,
        minHeight: 480
    },
    large_modal_dialog: {
        margin: 'auto'

    },
    medium_panel: {
        margin: 'auto',
        width: '60%'

    },
    main_drawer_header: {
        display: 'flex',
        marginTop: 25
    },
    card_container: {
        display: 'flex',
        marginTop: 25,
        padding: 20,
        minWidth:660
    },
    placeholder: {
        display: 'flex',
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    //OTHER OBJECTS:
    image_component: {
        margin: 'auto',
        padding: 15,

    },
    form_component: {
        padding: 15,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#15325F'
    },
    form_component_small: {
        padding: 15,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#15325F',
        width: "25%"
    },
    form_component_medium: {
        padding: 15,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#15325F',
        width: "50%"
    },
    form_component_checkbox: {
        padding: 3,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#15325F'
    },
    form_component_checkbox_left_margin: {
        padding: 3,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#15325F',
        marginLeft: 15
    },
    save_button: {
        width: 85
    },
    cancel_button: {
        width: 85
    },
    cancel_button_top_margin: {
        margin: 20,
        width: 85
    },
    interval_selector: {
        width: 350,
        height: 40,
        marginLeft: 30,
        marginRight: 35,
        marginBottom: 20
    },
    shelf_item_top: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#6D809D',
        justifyContent: 'space-evenly',
        paddingTop: 20
    },
    //TIME SCHEDULERS
    schedule_card: {
        height: 250,
        marginBottom: 10,
        maxWidth: 300
    },
    schedule_horisontal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },

    add_schedule: {
        paddingLeft: 45,
        marginTop: -35
    },
    close_icon: {
        cursor: 'pointer',
        float: 'right',
        marginTop: '5px',
        width: '20px',
        fill: '#15325F'
    },
    pointer: {
        cursor: 'pointer'
    },
    grab: {
        cursor: 'grab'
    },
    pointer_top_margin: {
        marginTop: 20,
        cursor: 'pointer'
    },
    red: {
        color: "#ee4623"
    },
    green: {
        color: "#3f54a5"
    },
    amber: {
        color: "#b4d5fa"
    },
    unknown: {

    },
    space: {
        height: 60,
        margin: 4,
    },
    space_smaller: {
        height: 30,
        margin: 4,
    },
    space_smallest: {
        height: 10,
        margin: 4,
    },
    floatleft: {
        float: 'left'
    },
    center: {
        margin: "auto",
        display: "block"
    },
    margin25: {
        marginLeft: 25,
        marginTop: 25
    },
    marginleft25: {
        marginLeft: 25
    },
    expansionbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background:"#1f3161",
        height:35,
        marginTop:1,
        marginBottom:1,
        minWidth:640
    },
    expansionbar_medium: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background:"#1f3161",
        opacity: 0.8,
        height:35,
        marginTop:1,
        marginBottom:1,
        marginLeft:'auto',
        marginRight:'auto',
        width:900
    },
    expansionbar_small:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background:"#1f3161",
        opacity: 0.6,
        height:35,
        marginTop:1,
        marginBottom:1,
        width:850,

    },
    expansioncontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background:"#ffffff"
    },
    icon_white:{
        color: '#FFFFFF',
    },
    icon_blue:{
        color: '#15325F',
    }
}));
//Material UI styling
export const searchStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 566,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    center: {
        margin: "auto",
        display: "block"
    },
    svg_margin: {
        marginLeft: 90,
        marginTop: 80
    }

}));