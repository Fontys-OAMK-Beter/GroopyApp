import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        justifyContent: 'space-between',
    },
    containerForGroups: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        justifyContent: 'space-between',

    },
    containerForButtons: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    containerForList: {
        backgroundColor: '#f4f4f4',
        flex: 4,
        flexDirection: 'row',
        
    },
    containerForForms: {
        backgroundColor: '#f4f4f4',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    subContainer: {
        backgroundColor: '#f4f4f4',
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
        backgroundColor: '#f194ff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    switch: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    itemWithPicture: {
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    itemWithText: {
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    },
    viewGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 18,
    },
    listUnitWithPicture: {
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    listTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    listSubtitle: {
        fontSize: 16,
        color: '#000000'
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