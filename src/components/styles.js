import { StyleSheet } from 'react-native';
import { Colors } from '../config';
// import scaling from '../../utilsAndServices/scaling';

const flexStyles: any = {
    display: 'flex',
    // flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'stretch',
};
// const {   } =scaling

const circleStyle: any = (heightWidth: number) => ({
    borderRadius: heightWidth / 2,
    width: heightWidth,
    height: heightWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const styles = StyleSheet.create({
    playerMaxView: {
        ...flexStyles,
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fffff',
        paddingHorizontal: 0,
        // height: 300,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topSection: {
        ...flexStyles,
        // flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
    },
    progrsBarSection: {
        ...flexStyles,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 40
    },
    buttonsSection: {
        ...flexStyles,
        // flex: 1,
        flexDirection: 'row',
    },
    buttonsCol: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: 10,
    },
    playPauseButton: {
        ...circleStyle(60),
        backgroundColor: Colors.primary
    },
    playPauseIcon: {
        color: '#fff',
    },
    trackArtBox: {
        ...flexStyles,
        // flex: 1,
        display: 'flex',
    },
    trackArt: {
        ...circleStyle(90),
        borderWidth: 2,
    },
    trackDesc: {
        ...flexStyles,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
    },
    trackTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3d3d5c',
    },
    trackSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3d3d5c',
    },
});

export default styles;