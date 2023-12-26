import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';

interface ProfileScreenProps {
  candidateName: string;
  candidateAge: number;
  candidateEmail: string;
  candidateSkills: string[];
  // Add more relevant information as needed
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ candidateName, candidateAge, candidateEmail, candidateSkills }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.labelText}>Name:</Text>
          <Text style={styles.valueText}>{candidateName}</Text>

          <Text style={styles.labelText}>Age:</Text>
          <Text style={styles.valueText}>{candidateAge}</Text>

          <Text style={styles.labelText}>Email:</Text>
          <Text style={styles.valueText}>{candidateEmail}</Text>

          <Text style={styles.labelText}>Skills:</Text>
          <View>
            {candidateSkills.map((skill, index) => (
              <Text key={index} style={styles.skillText}>
                {skill}
              </Text>
            ))}
          </View>
          {/* Add more information here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 20,
    fontFamily: fonts.LexendSemiBold,
    color: colors.primaryColor,
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    padding: 16,
  },
  labelText: {
    fontSize: 12,
    fontFamily: fonts.PoppinsMedium,
    color: colors.c555,
    marginTop: 8,
  },
  valueText: {
    fontSize: 18,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    marginTop: 4,
    marginBottom:10,
  },
  skillText: {
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    marginTop: 4,
  },
});

export default ProfileScreen;
