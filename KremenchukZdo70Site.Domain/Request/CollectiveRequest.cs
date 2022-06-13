namespace KremenchukZdo70Site.Domain.Request
{
    public class CollectiveRequest
    {
        public int Size { get; set; }

        public int Page { get; set; }

        public bool? CalcCountTotal { get; set; } = true;
    }
}
