import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomHeader from '../../component/CustomHeader';
import { colors } from '../../assects/colors';
import TaskList from '../../component/TaskList';

const AllTask: React.FC = () => {
    const [taskId, setTaskId] = useState(null);
    const { taskList } = useSelector((state) => state.taskData);


    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <CustomHeader title={'All Task'} menuIcon />
            <TaskList data={taskList} isAllTask  />
        </View>
    );
};

export default AllTask;
