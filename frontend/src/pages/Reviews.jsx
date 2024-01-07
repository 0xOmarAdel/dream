import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Banner from "../layout/Banner";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import Section from "../ui/Section";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";

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

  console.log(orderedMeals);

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
      ) : orderedMeals.length === 0 ? (
        <Error message="Your reviews history is empty!" />
      ) : (
        <Section classes="grid grid-cols-3 gap-12">
          <Card classes="col-span-2">
            <CardTitle title="Reviewed meals" />
          </Card>
          <Card classes="col-span-1">
            <CardTitle title="Pending reviews" />
          </Card>
        </Section>
      )}
    </div>
  );
};

export default Reviews;
