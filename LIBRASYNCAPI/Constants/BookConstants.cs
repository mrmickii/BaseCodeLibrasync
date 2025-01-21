namespace LIBRASYNCAPI.Constants
{
    public class BookConstants
    {
        public static class HttpRoutes 
        {
            public const string BASE = "api/[controller]";
            public const string GETALL = "";
            public const string GETBYID = "{id}";
            public const string CREATE = "create";
            public const string UPDATE = "update/{id}";
            public const string DELETE = "delete/{id}";
        }
    }
}
