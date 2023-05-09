import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        backgroundStyle: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(360deg, #300000 0%, #212121 74.48%, #212121 100%)`,
        flex: 1,
        justifyContent: 'space-between',
    },
    containerForButtons: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(360deg, #300000 0%, #212121 74.48%, #212121 100%)`,
        flex: 0,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
    },
    containerForForms: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(360deg, #300000 0%, #212121 74.48%, #212121 100%)`,
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    subContainer: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(360deg, #300000 0%, #212121 74.48%, #212121 100%)`,
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
        marginHorizontal: 16,
        flexDirection: "row",
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