import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Loading from '../assets/loading.gif';

const Quizpage = () => {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [shuffleOptions, setShuffleOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [score, setScore] = useState(0);

  const navigation = useNavigation();

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986"
      );
      const data = await response.json();
      console.log(data.results);
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleAnswerSelect = (selectedAnswer) => {
    console.log( "Selected Answer:", decodeURIComponent( selectedAnswer ) );
    setAttempted( attempted + 1 );
    if (questionNumber < 9) {
      setQuestionNumber(questionNumber + 1);
    }
    if (selectedAnswer === questions[questionNumber].correct_answer) {
      console.log( "Correct Answer" );
      setCorrectAnswers(correctAnswers + 1);
      setScore(score + 10);
    } else {
      console.log("Wrong Answer");
    }
  };

  const shuffledOptions = () => {
    const options = [
      questions[questionNumber].correct_answer,
      ...questions[questionNumber].incorrect_answers
    ];

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    setShuffleOptions(options);
  };

  useEffect(() => {
    if (questions && questions.length > 0) {
      shuffledOptions();
    }
  }, [questions, questionNumber]);

  return (
    <View>
      {questions ? (
        <SafeAreaView className="p-10 bg-white">
          {questions &&
            questions.length > 0 &&
            questionNumber < questions.length && (
              <View className="flex flex-col h-full justify-between">
                <View className="flex flex-col">
                  <View>
                    <Text className="text-2xl font-semibold">
                      Q{questionNumber + 1}.{" "}
                      {decodeURIComponent(questions[questionNumber].question)}
                    </Text>
                  </View>
                  <View className="flex flex-col gap-4 w-full mt-8">
                    {shuffleOptions.map((answer, index) => (
                      <TouchableOpacity
                        key={index}
                        className="bg-blue-500 py-2 px-5 rounded-xl w-full"
                        onPress={() => handleAnswerSelect(answer)}>
                        <Text className="text-white text-lg font-semibold">
                          {decodeURIComponent(answer)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
                <View className="flex flex-row justify-between">
                  <TouchableOpacity
                    className="bg-emerald-500 px-8 py-2 rounded-xl"
                    onPress={() => setQuestionNumber(questionNumber - 1)}>
                    <Text className="text-white text-lg font-medium">
                      PREVIOUS
                    </Text>
                  </TouchableOpacity>
                  {questionNumber < 9 ? (
                    <TouchableOpacity
                      className="bg-emerald-500 px-8 py-2 rounded-xl"
                      onPress={() => setQuestionNumber(questionNumber + 1)}>
                      <Text className="text-white text-lg font-medium">
                        SKIP
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      className="bg-emerald-500 px-8 py-2 rounded-xl"
                      onPress={() =>
                        navigation.navigate("Resultpage", {
                          score: score,
                          correctAnswers: correctAnswers,
                          attempted: attempted
                        })
                      }>
                      <Text className="text-white text-lg font-medium">
                        RESULT
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}
        </SafeAreaView>
      ) : (
        <View className="flex justify-center items-center h-full w-full">
          <Image
            source={Loading}
            style={{ height: 300, width: 300, resizeMode: "contain" }}
          />
        </View>
      )}
    </View>
  );
};

export default Quizpage;
