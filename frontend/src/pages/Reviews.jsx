import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Banner from "../layout/Banner";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import Section from "../ui/Section";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import PendingReviews from "../components/Reviews/PendingReviews";
import ReviewedMeals from "../components/Reviews/ReviewedMeals";

const Reviews = () => {
  const {
    runAxios: fetchOrders,
    data: orderedMeals,
    loading,
    error,
  } = useAxios("/users/reviews-orders");

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <Loading />;

  const reviewedMeals = orderedMeals.filter((meal) => meal.rating !== null);
  const pendingReviews = orderedMeals.filter((meal) => meal.rating === null);

  return (
    <div className="flex flex-col">
      <Banner
        title="reviews history"
        breadcrumbs={[
          { text: "profile", path: "/profile" },
          { text: "reviews" },
        ]}
      />
      {error ? (
        <Error message="An error occurred while fetching your data!" />
      ) : (
        <Section classes="grid grid-cols-3 gap-12">
          <Card classes="col-span-3 lg:col-span-2">
            <CardTitle title="Reviewed meals" />
            {reviewedMeals.length === 0 ? (
              <p className="text-lg text-gray-600">No reviewed meals yet.</p>
            ) : (
              <ReviewedMeals meals={reviewedMeals} />
            )}
          </Card>
          {pendingReviews.length === 0 ? (
            <p className="text-lg text-gray-600">
              No pending reviews at the moment.
            </p>
          ) : (
            <Card classes="col-span-3 lg:col-span-1">
              <CardTitle title="Pending reviews" />
              <PendingReviews meals={pendingReviews} />
            </Card>
          )}
        </Section>
      )}
    </div>
  );
};

export default Reviews;
