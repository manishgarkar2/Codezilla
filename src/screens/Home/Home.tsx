import React, { useEffect, useState } from 'react';
import { TurboModuleRegistry, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../component/CustomHeader';
import { getTasks } from '../../api';
import { iosOpacity, width } from '../../assects/strings';
import { colors } from '../../assects/colors';
import { storeTaskLists } from '../../redux/actions/taskData';
import TaskList from '../../component/TaskList';
import messaging from '@react-native-firebase/messaging';
import CustomLoader from '../../component/CustomLoader';

const Home: React.FC = () => {
    const [taskId, setTaskId] = useState(null);
    const [loading, setLoading] = useState(false);

    const { taskList } = useSelector((state) => state.taskData);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!taskList){
         setLoading(true)
         getTasks().then((res) => {
            dispatch(storeTaskLists(res?.data))
            setLoading(false)
        });
        }
        GetFCMToken()
    }, []);

    async function GetFCMToken(){
        const fcmToken = await messaging().getToken()
        console.log('fcmToken',fcmToken)
    }
        
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <CustomHeader title={'Home'} menuIcon />
            <TaskList data={taskList} />
            <CustomLoader status={loading} />
        </View>
    );
};

export default Home;