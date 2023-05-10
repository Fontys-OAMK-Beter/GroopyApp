import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        justifyContent: 'space-between',
    },
    containerForButtons: {
        backgroundColor: '#212121',
        flex: 0,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
    },
    containerForForms: {
        backgroundColor: '#212121',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    subContainer: {
        backgroundColor: '#212121',
        alignContent: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 10,
    },
    Header: {
        backgroundColor: '#f4f4f4'
    },
    text: {
        color: '#000000'
    },
    button: {
        backgroundColor: '#7E6C6B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    switch: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#7E6C6B',
        color: 'red',//'#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 10,
    },
    itemWithPicture: {
        flexDirection: 'row',
        color: 'red',//'#ffffff',
        backgroundColor: '#7E6C6B',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    bubble:{
        borderRadius: 30,
        backgroundColor: 'red',//'#FFFFFF',
        paddingTop: 8,
        opacity: 0.5,
        width: 43,
        alignItems: "center",
        overflow: "hidden",
        marginRight: 18,
        paddingBottom: 13
    },
    bubbleplus:{
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        opacity: 0.5,
        width: 43,
        alignItems: "center",
        overflow: "hidden",
        marginRight: 18,
        paddingBottom: 11
    },
    subheader: {
        backgroundColor: '#594847',
        padding: 7,
        marginTop: 28
        
    },
    subtitle: {
        fontSize: 20,
        color: '#FACDA4',
        textAlign: 'center',
    },
    itemWithText: {
        flexDirection: 'row',
        color: '#ffffff',
        backgroundColor: '#594847',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
    },
    viewGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 18,
    },
    listUnitWithPicture: {
        flexDirection: 'row',
        backgroundColor: '#594847',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    listTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    listSubtitle: {
        fontSize: 16,
        color: '#ffffff'
    },
    defaultUserIcon: {
        height: 48,
        width: 48,
    },
    textInput: {
        height: 40,
        borderColor: 'dark-gray',
        borderWidth: 1,
        flex: 2,
        marginVertical: 24,
    },
})

export default styles;