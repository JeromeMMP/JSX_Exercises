const Tweet = (props) => {
  return (
    <div>
      <small class="post-info">
        {" "}
        @{props.name} - {props.timeAgo}
      </small>
      <p class="message">{props.message} </p>
    </div>
  );
};
