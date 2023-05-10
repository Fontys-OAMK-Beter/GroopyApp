import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000ee',// '#212121',
        flex: 1,
        justifyContent: 'space-between',
    },
    containerVideo: {
        flex: 1,
        position: 'relative',
    },
    videoBackground: {
        height: '100%',
        width: '100%',
    },
    videoContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    contentLogReg: {
        position: 'absolute',
        zIndex: 1,
        transform: [{ translateY: 300 }],
        height: '100%',
        width: '100%',
    },
    authPageLogo:{
        alignContent: 'center',
        marginTop: 13,
    },
    authPageLogoImage:{
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        marginLeft: 40,
        marginRight: 40,
    },
    authButtons: {
        color: '#9e13e8',
        width: '50%',
        alignSelf: 'center',
    },
    authInputsContainer: {
        width: '100%',
    },
    authInputs: {
        width: '100%',
        height: 50,
        borderColor: '#9D13E89F',
        borderBottomWidth: 1.5,
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        backgroundColor: '#DFDFDF99',
        justifyContent: "space-around",
        fontSize: 15,
        fontWeight: "800",
    },
    authOptions: {
        marginBottom: 150,
    },
    authOptionsText: {
        color: '#f3f3f3',
        fontSize: 17,
        fontStyle: 'italic',
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    containerForButtons: {
        backgroundColor:'#000000ee',// '#212121',
        flex: 0,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
    },
    containerForForms: {
        backgroundColor: '#000000ee',// '#212121',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    subContainer: {
        backgroundColor: '#000000ee',// '#212121',
        alignContent: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        marginVertical: 10,
    },
    Header: {
        backgroundColor: '#000000ee',// '#212121','#f4f4f4'
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
        backgroundColor: '#59484799',
        color: '#ffffff',
        padding: 20,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 16,
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
        backgroundColor: '#FFFFFFaa',
        paddingTop: 8,
        opacity: 0.7,
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
    profileUsername:{
        textAlign: 'center',
        color: 'white',
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