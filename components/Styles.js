import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        justifyContent: 'space-between',
    },
    containerForButtons: {
        backgroundColor: '#f4f4f4',
        flex: 0,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
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
    title: {
        fontSize: 32
    },
    viewGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        color: '#000000'
    },
})

export default styles;