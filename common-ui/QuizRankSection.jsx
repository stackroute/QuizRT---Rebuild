var QuizRankSection = React.createClass({
  render: function(){

    return(
    <div className="row">
      <div className="col-3 pull-left">
        Your rank is something

      </div>

      <div className="col-3">
        Timer
      </div>

      <div className="col-3">
        Your score is something
      </div>



      <div className="col-3 pull-right">
        some analytics.
      </div>


    </div>
  );
  }
});

module.exports = QuizRankSection;
