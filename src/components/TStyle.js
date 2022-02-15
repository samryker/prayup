import { StyleSheet } from 'react-native';
// import scaling from '../../utilsAndServices/scaling';


const circleStyle: any = (heightWidth: number) => ({
    borderRadius: heightWidth / 2,
    width: heightWidth,
    height: heightWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemStyle: {
        marginTop: 1,
        // marginHorizontal: 8,
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        height: 8,
        borderBottomColor: '#333',
        borderWidth: 0,
    },
    trackImgBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    trackDescBox: {
        flex: 5,
        paddingLeft: 1,
        marginLeft: 5,
        borderRadius: 5,
        display: 'flex',
    },
    trackImg: {
        ...circleStyle(50),
    },
    titleBox: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: 2,
    },
    subTitleBox: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 1,
    },
    listBox: {
        height: '100%',
    },
    playerBox: {
        position: 'absolute',
        zIndex: 10,
        height: '50%',
        width: '100%',
        bottom: 0,
    },
});

export default styles;