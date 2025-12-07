// Mock lesson with exercises and sub-lessons
const MOCK_LESSON_DATA: Record<string, any> = {
  "1": {
    id: 1,
    course_id: 1,
    title: "Variables and Expressions",
    slug: "variables-expressions",
    description: "Learn about variables and algebraic expressions",
    video_url: null,
    duration_seconds: 1800,
    exercises: [
      {
        id: 1,
        lesson_id: 1,
        question: "What is a variable in algebra?",
        question_type: "multiple_choice",
        points: 10,
        order_index: 1,
        options: [
          { id: 1, exercise_id: 1, text: "A number that never changes", is_correct: 0, order_index: 1 },
          { id: 2, exercise_id: 1, text: "A letter that represents an unknown value", is_correct: 1, order_index: 2 },
          { id: 3, exercise_id: 1, text: "A mathematical operation", is_correct: 0, order_index: 3 },
        ]
      }
    ]
  },
  // Calculus I - Limits lesson (ID: 16 from Course.tsx)
  "16": {
    id: 16,
    course_id: 6,
    title: "Limits",
    slug: "limits",
    description: "Understanding limits and continuity - the foundation of calculus",
    video_url: null,
    duration_seconds: 3000,
    unitTitle: "UNIT 1 — Limits & Continuity",
    subLessons: [
      {
        title: "Intro to Limits",
        topics: [
          { id: "limit-1-1", title: "What is a limit?", completed: false },
          { id: "limit-1-2", title: "Estimating limits from graphs", completed: false },
          { id: "limit-1-3", title: "Estimating limits from tables", completed: false },
          { id: "limit-1-4", title: "Limits using algebra", completed: false },
        ]
      },
      {
        title: "Properties of Limits",
        topics: [
          { id: "limit-2-1", title: "Limit laws", completed: false },
          { id: "limit-2-2", title: "Limits of combined functions", completed: false },
        ]
      },
      {
        title: "One-Sided & Infinite Limits",
        topics: [
          { id: "limit-3-1", title: "Left-hand & right-hand limits", completed: false },
          { id: "limit-3-2", title: "Infinite limits (vertical asymptotes)", completed: false },
          { id: "limit-3-3", title: "Limits at infinity (horizontal asymptotes)", completed: false },
        ]
      },
      {
        title: "Continuity",
        topics: [
          { id: "limit-4-1", title: "Definition of continuity", completed: false },
          { id: "limit-4-2", title: "Types of discontinuities", completed: false },
          { id: "limit-4-3", title: "Continuity and limit connection", completed: false },
          { id: "limit-4-4", title: "Intermediate Value Theorem", completed: false },
        ]
      }
    ],
    exercises: [
      {
        id: 101,
        lesson_id: 16,
        question: "What does lim(x→a) f(x) = L mean?",
        question_type: "multiple_choice",
        points: 10,
        order_index: 1,
        options: [
          { id: 101, exercise_id: 101, text: "f(a) equals L", is_correct: 0, order_index: 1 },
          { id: 102, exercise_id: 101, text: "As x approaches a, f(x) approaches L", is_correct: 1, order_index: 2 },
          { id: 103, exercise_id: 101, text: "x equals a when f(x) = L", is_correct: 0, order_index: 3 },
          { id: 104, exercise_id: 101, text: "The function is undefined at a", is_correct: 0, order_index: 4 },
        ]
      },
      {
        id: 102,
        lesson_id: 16,
        question: "What type of discontinuity occurs when a function has a 'hole' at a point?",
        question_type: "multiple_choice",
        points: 10,
        order_index: 2,
        options: [
          { id: 105, exercise_id: 102, text: "Jump discontinuity", is_correct: 0, order_index: 1 },
          { id: 106, exercise_id: 102, text: "Removable discontinuity", is_correct: 1, order_index: 2 },
          { id: 107, exercise_id: 102, text: "Infinite discontinuity", is_correct: 0, order_index: 3 },
          { id: 108, exercise_id: 102, text: "Essential discontinuity", is_correct: 0, order_index: 4 },
        ]
      }
    ]
  },
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, CheckCircle, XCircle, Circle, PlayCircle } from 'lucide-react';
import { Label } from '../components/ui/label';

interface ExerciseOption {
  id: number;
  exercise_id: number;
  text: string;
  is_correct: number;
  order_index: number;
}

interface Exercise {
  id: number;
  lesson_id: number;
  question: string;
  question_type: 'multiple_choice' | 'short_answer' | 'essay';
  points: number;
  order_index: number;
  options: ExerciseOption[];
}

interface SubLessonTopic {
  id: string;
  title: string;
  completed: boolean;
}

interface SubLesson {
  title: string;
  topics: SubLessonTopic[];
}

interface Lesson {
  id: number;
  course_id: number;
  title: string;
  slug: string;
  description: string | null;
  video_url: string | null;
  duration_seconds: number;
  unitTitle?: string;
  subLessons?: SubLesson[];
  exercises: Exercise[];
}

export function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    // Mock data - in real app would fetch from /api/lessons/${id}
    setTimeout(() => {
      const data = MOCK_LESSON_DATA[id || ''];
      if (data) {
        setLesson(data);
      }
      setLoading(false);
    }, 300);
  }, [id]);

  const handleAnswerChange = (exerciseId: number, value: number | string) => {
    setAnswers((prev) => ({
      ...prev,
      [exerciseId]: value
    }));
  };

  const handleSubmitAnswer = (exercise: Exercise) => {
    const answer = answers[exercise.id];
    if (!answer) return;

    // Check if answer is correct (mock logic)
    let isCorrect = false;
    if (exercise.question_type === 'multiple_choice') {
      const selectedOption = exercise.options.find(opt => opt.id === Number(answer));
      isCorrect = selectedOption?.is_correct === 1;
    }

    setResults((prev) => ({
      ...prev,
      [exercise.id]: isCorrect
    }));
    setSubmitted((prev) => ({
      ...prev,
      [exercise.id]: true
    }));
  };

  const handleCompleteLesson = () => {
    alert('Lesson completed! Great job!');
    window.history.back();
  };

  const handleTopicClick = (topicId: string) => {
    setActiveTopic(topicId);
    setCompletedTopics(prev => new Set([...prev, topicId]));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">Lesson not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
          {lesson.description && (
            <p className="mt-2 text-gray-600">{lesson.description}</p>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Video Player */}
        {lesson.video_url && (
          <Card className="mb-8 overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
              <p>Video Player (URL: {lesson.video_url})</p>
            </div>
          </Card>
        )}

        {/* Sub-Lessons Structure for Limits */}
        {lesson.subLessons && lesson.subLessons.length > 0 && (
          <Card className="mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{lesson.unitTitle || "Lesson Content"}</h2>
            <div className="space-y-6">
              {lesson.subLessons.map((subLesson, subIndex) => (
                <div key={subIndex}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Lesson: {subLesson.title}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    {subLesson.topics.map((topic) => (
                      <li key={topic.id} className="flex items-center gap-3">
                        <button
                          onClick={() => handleTopicClick(topic.id)}
                          className={`flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg transition-colors ${
                            activeTopic === topic.id
                              ? 'bg-blue-50 text-blue-700'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {completedTopics.has(topic.id) ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : activeTopic === topic.id ? (
                            <PlayCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={`${
                            completedTopics.has(topic.id) 
                              ? 'text-green-700' 
                              : activeTopic === topic.id 
                                ? 'text-blue-700 font-medium' 
                                : 'text-blue-600 hover:text-blue-700'
                          }`}>
                            {topic.title}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Generic Lesson Content (for lessons without sub-lessons) */}
        {(!lesson.subLessons || lesson.subLessons.length === 0) && (
          <Card className="mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lesson Content</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700">
                This lesson covers the fundamentals of {lesson.title.toLowerCase()}. 
                Practice the exercises below to test your understanding.
              </p>
            </div>
          </Card>
        )}

        {/* Exercises */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Practice Exercises</h2>
            
            {lesson.exercises.map((exercise, index) => (
              <Card key={exercise.id} className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Question {index + 1} ({exercise.points} points)
                  </h3>
                  <p className="mt-2 text-gray-700">{exercise.question}</p>
                </div>

                {exercise.question_type === 'multiple_choice' && (
                  <div className="space-y-3">
                    {exercise.options.map((option) => (
                      <div key={option.id} className="flex items-center gap-3">
                        <input
                          type="radio"
                          id={`option-${option.id}`}
                          name={`exercise-${exercise.id}`}
                          value={option.id}
                          checked={answers[exercise.id] === option.id}
                          onChange={() => handleAnswerChange(exercise.id, option.id)}
                          disabled={submitted[exercise.id]}
                          className="h-4 w-4"
                        />
                        <Label 
                          htmlFor={`option-${option.id}`}
                          className={`flex-1 cursor-pointer ${
                            submitted[exercise.id] && option.is_correct === 1
                              ? 'text-green-600 font-medium'
                              : submitted[exercise.id] && answers[exercise.id] === option.id && option.is_correct === 0
                              ? 'text-red-600'
                              : ''
                          }`}
                        >
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex items-center gap-4">
                  {!submitted[exercise.id] ? (
                    <Button
                      onClick={() => handleSubmitAnswer(exercise)}
                      disabled={!answers[exercise.id]}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <div className={`flex items-center gap-2 ${
                      results[exercise.id] ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {results[exercise.id] ? (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5" />
                          <span className="font-medium">Incorrect. Try again!</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Complete Lesson */}
        <div className="mt-8">
          <Button
            onClick={handleCompleteLesson}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            Complete Lesson
          </Button>
        </div>
      </main>
    </div>
  );
}
