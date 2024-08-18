const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  return (
    <div>
      <h1>Cource Id {params.courseId}</h1>
    </div>
  );
};

export default CourseIdPage;
