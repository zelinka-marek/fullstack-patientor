import { Favorite } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
});

const healthRatings = [
  "The patient is in great shape",
  "The patient has a low risk of getting sick",
  "The patient has a high risk of getting sick",
  "The patient has a diagnosed condition",
];

export function HealthRatingBar(props: { rating: number; showText: boolean }) {
  const { rating, showText } = props;

  return (
    <div className="health-bar">
      <StyledRating
        readOnly
        value={4 - rating}
        max={4}
        icon={<Favorite fontSize="inherit" />}
      />
      {showText && <p>{healthRatings[rating]}</p>}
    </div>
  );
}
