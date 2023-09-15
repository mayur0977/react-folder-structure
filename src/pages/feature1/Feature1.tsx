import ComponentPartOne from './components/ComponentPartOne';
import ComponentPartTwo from './components/ComponentPartTwo';
import useFeatureOne from './hooks/useFeature';

function Feature1() {
  const { featureOneList, isLoading, first } = useFeatureOne();
  return (
    <div>
      <ComponentPartOne />
      <ComponentPartTwo />
    </div>
  );
}

export default Feature1;
