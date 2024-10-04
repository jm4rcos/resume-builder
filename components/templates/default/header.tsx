import { IPersonalInfo } from "@/interfaces";

export const Header = ({
  firstName,
  lastName,
  profession,
}: // imageUrl,
IPersonalInfo) => {
  return (
    <div className="flex items-center gap-8">
      {/* {imageUrl && (
        <Avatar className="w-32 h-32">
          <AvatarImage src={imageUrl} alt="profile image" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )} */}

      <div className="flex flex-col h-full justify-around">
        <div>
          <h1 className="max-w-xs">{firstName || "First Name"}</h1>
          {lastName && <h1 className="max-w-xs">{lastName}</h1>}
        </div>
        {profession && <p className="max-w-xs mt-2">{profession}</p>}
      </div>
    </div>
  );
};
