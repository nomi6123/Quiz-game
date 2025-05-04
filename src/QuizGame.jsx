import { useState } from 'react';

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      questionText: 'Which planet in our solar system has the most moons?',
      answerOptions: [
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Saturn', isCorrect: true },
        { answerText: 'Uranus', isCorrect: false },
        { answerText: 'Neptune', isCorrect: false },
      ],
      explanation: 'Saturn has 83 confirmed moons, while Jupiter has 79, Uranus has 27, and Neptune has 14.'
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Michelangelo', isCorrect: false },
      ],
      explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519. It is now displayed at the Louvre Museum in Paris.'
    },
    {
      questionText: 'What is the largest ocean on Earth?',
      answerOptions: [
        { answerText: 'Atlantic Ocean', isCorrect: false },
        { answerText: 'Indian Ocean', isCorrect: false },
        { answerText: 'Arctic Ocean', isCorrect: false },
        { answerText: 'Pacific Ocean', isCorrect: true },
      ],
      explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 30% of the Earth\'s surface.'
    },
    {
      questionText: 'Which element has the chemical symbol \'Au\'?',
      answerOptions: [
        { answerText: 'Silver', isCorrect: false },
        { answerText: 'Gold', isCorrect: true },
        { answerText: 'Aluminum', isCorrect: false },
        { answerText: 'Argon', isCorrect: false },
      ],
      explanation: 'Au comes from the Latin word "aurum," meaning gold. Gold is element 79 on the periodic table.'
    },
    {
      questionText: 'Which country is home to the Great Barrier Reef?',
      answerOptions: [
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Indonesia', isCorrect: false },
        { answerText: 'Australia', isCorrect: true },
        { answerText: 'Mexico', isCorrect: false },
      ],
      explanation: 'The Great Barrier Reef is located off the coast of Queensland, Australia. It\'s the world\'s largest coral reef system.'
    },
    {
      questionText: 'In which year did the first human land on the moon?',
      answerOptions: [
        { answerText: '1965', isCorrect: false },
        { answerText: '1969', isCorrect: true },
        { answerText: '1971', isCorrect: false },
        { answerText: '1973', isCorrect: false },
      ],
      explanation: 'Neil Armstrong and Buzz Aldrin landed on the moon on July 20, 1969, during the Apollo 11 mission.'
    },
    {
      questionText: 'What is the capital of Canada?',
      answerOptions: [
        { answerText: 'Toronto', isCorrect: false },
        { answerText: 'Montreal', isCorrect: false },
        { answerText: 'Vancouver', isCorrect: false },
        { answerText: 'Ottawa', isCorrect: true },
      ],
      explanation: 'Ottawa, located in the province of Ontario, has been the capital of Canada since 1867.'
    },
    {
      questionText: 'Who wrote the play "Romeo and Juliet"?',
      answerOptions: [
        { answerText: 'William Shakespeare', isCorrect: true },
        { answerText: 'Charles Dickens', isCorrect: false },
        { answerText: 'Mark Twain', isCorrect: false },
        { answerText: 'Jane Austen', isCorrect: false },
      ],
      explanation: 'William Shakespeare wrote "Romeo and Juliet" around 1594-1595. It\'s one of his most famous tragedies.'
    },
    {
      questionText: 'What is the smallest prime number?',
      answerOptions: [
        { answerText: '0', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: true },
        { answerText: '3', isCorrect: false },
      ],
      explanation: '2 is the smallest prime number. A prime number is a natural number greater than 1 that is not divisible by any positive integer other than 1 and itself.'
    },
    {
      questionText: 'Which of these animals is not a mammal?',
      answerOptions: [
        { answerText: 'Dolphin', isCorrect: false },
        { answerText: 'Platypus', isCorrect: false },
        { answerText: 'Penguin', isCorrect: true },
        { answerText: 'Bat', isCorrect: false },
      ],
      explanation: 'Penguins are birds. Dolphins, platypuses, and bats are all mammals, even though they live in different environments and have various adaptations.'
    },
  ];

  const handleAnswerOptionClick = (isCorrect, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswers(Array(10).fill(null));
    setShowExplanation(false);
  };

  const getScoreMessage = () => {
    if (score >= 9) return "Quiz Master! Incredible knowledge.";
    if (score >= 7) return "Very impressive! You know your stuff.";
    if (score >= 5) return "Pretty good! Above average knowledge.";
    if (score >= 3) return "Not bad! Some room for improvement.";
    return "Keep learning! Everyone starts somewhere.";
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">General Knowledge Quiz</h1>
        
        {showScore ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Quiz Complete!</h2>
            <p className="text-3xl font-bold mb-4">Your Score: {score} out of {questions.length}</p>
            <p className="mb-6 text-lg">{getScoreMessage()}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Your Answers:</h3>
              {questions.map((question, index) => (
                <div key={index} className="mb-3 text-left">
                  <p className="font-medium">Q{index + 1}: {question.questionText}</p>
                  <p className={`${
                    question.answerOptions[selectedAnswers[index]]?.isCorrect 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    Your answer: {question.answerOptions[selectedAnswers[index]]?.answerText || 'Skipped'}
                  </p>
                  <p className="text-green-600">
                    Correct answer: {question.answerOptions.find(option => option.isCorrect).answerText}
                  </p>
                </div>
              ))}
            </div>
            
            <button 
              onClick={resetQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Question {currentQuestion + 1}/{questions.length}</span>
              <span className="text-sm font-medium text-blue-600">Score: {score}</span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].questionText}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                    className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-blue-100 hover:border-blue-500 hover:shadow-md hover:translate-x-1 transition-all duration-200 flex items-center"
                  >
                    <span className="inline-block w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm font-bold">{['A', 'B', 'C', 'D'][index]}</span>
                    <span>{answerOption.answerText}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={toggleExplanation}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showExplanation ? 'Hide Explanation' : 'Show Hint'}
              </button>
            </div>
            
            {showExplanation && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p>{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}