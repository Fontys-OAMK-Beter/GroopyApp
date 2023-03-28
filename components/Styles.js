import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    Header: {
        backgroundColor: '#f4f4f4'
    },
    text: {
        color: '#000000'
    },
    button: {
        backgroundColor: '#f194ff',
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
    title: {
        fontSize: 32
    },
    viewGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        height: 32,
        width: 32,
        color: '#000000'
    },
})

export default styles;