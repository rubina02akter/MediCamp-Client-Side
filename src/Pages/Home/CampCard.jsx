const CampCard = ({ cam }) => {
  const {
    image,
    campFees,
    name,
    dateAndTime,
    location,
    healthcareProfessional,
    participantCount,
    description,
  } = cam;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        {/* Camp Name */}
        <h2 className="card-title text-xl font-bold">
          {name}
          <div className="badge badge-secondary ml-2">NEW</div>
        </h2>

        {/* Camp Fees */}
        <p className="text-lg font-semibold text-gray-600">
          Fees: ${campFees}
        </p>

        {/* Date and Time */}
        <p className="text-sm text-gray-500">Date & Time: {dateAndTime}</p>

        {/* Location */}
        <p className="text-sm text-gray-500">Location: {location}</p>

        {/* Healthcare Professional */}
        <p className="text-sm text-gray-500">
          Healthcare Professional: {healthcareProfessional}
        </p>

        {/* Participant Count */}
        <p className="text-sm text-gray-500">
          Participants: {participantCount}
        </p>
        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline">Healthcare</div>
          <div className="badge badge-outline">Wellness</div>
        </div>
      </div>
    </div>
  );
};

export default CampCard;
