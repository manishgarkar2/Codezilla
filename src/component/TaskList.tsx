import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { iosOpacity, width } from '../assects/strings';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import Images from '../assects/Images';
import { useDispatch } from 'react-redux';
import { updateTaskLists } from '../redux/actions/taskData';
import { FlatList } from 'react-native';
import SwitchBar from './SwitchBar';

interface TaskListProps {
    data: [],
    isAllTask: boolean
}

const TaskList: React.FC<TaskListProps> = ({ data, isAllTask }) => {
    const dispatch = useDispatch();
    const updateTaskList = (taskId) => {
        dispatch(updateTaskLists(taskId))
    }

    function renderItem({ item, index }) {
        const isCompleted = item?.completed
        return (
            <Pressable
                onPress={isAllTask ? () => { } : () => updateTaskList(item?.id)}
                style={[styles.pressableContainer, { backgroundColor: isCompleted ? colors.transparentGreen : colors.white }, iosOpacity]}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ marginVertical: 5, flex: 1 }}>
                        <Text style={styles.smallText}>Task Name</Text>
                        <Text style={styles.normalText}>{item.title}</Text>
                    </View>

                    <View style={{ marginVertical: 5 }}>
                        <Text style={styles.smallText}>ID</Text>
                        <Text style={styles.normalText}>{item.id}</Text>
                    </View>
                </View>
                
                {!isAllTask?<SwitchBar status={isCompleted} />:null}
                {isCompleted ?
                    <Text style={styles.completedText}>Completed</Text> :
                    <Text style={styles.pendingText}>Pending</Text>}


            </Pressable>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            initialNumToRender={20}
            data={data}
            renderItem={renderItem}
            maxToRenderPerBatch={20}
        />
    )
};

const styles = StyleSheet.create({
    pressableContainer: {
        width: width / 1.10,
        padding: 10,
        borderRadius: 5,
        marginVertical: 8,
        alignSelf: 'center',
    },
    smallText: {
        fontSize: 10,
        color: '#666666',
        fontFamily: fonts.PoppinsRegular,
    },
    normalText: {
        fontFamily: fonts.PoppinsRegular,
        color: colors.B212529,
    },
    completedText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: 10,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        color: colors.green,
    },
    pendingText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: 10,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        color: colors.primaryColor,
    },
});

export default TaskList;
