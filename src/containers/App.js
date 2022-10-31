import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRobots, setSearchfield } from "../actions";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  searchfield: state.searchRobots.searchfield,
  error: state.requestRobots.error,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

const App = ({
  searchfield,
  robots,
  isPending,
  error,
  onSearchChange,
  onRequestRobots,
}) => {
  useEffect(() => {
    onRequestRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const renderRobots = isPending ? (
    <h1 className="f2">Loading...</h1>
  ) : error ? (
    <h1 className="f3">There was an error while loading your RoboFriends.</h1>
  ) : !robots.length ? (
    <h1 className="f3">No RoboFriends were found.</h1>
  ) : (
    <>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
      <h1 className="f4">Robots delivered by Robohash.org</h1>
    </>
  );

  return (
    <div className="tc">
      <Header />
      {renderRobots}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
