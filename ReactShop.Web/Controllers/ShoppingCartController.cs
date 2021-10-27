//using AutoMapper;

//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;

//using ReactShop.Domain.DTOModels;
//using ReactShop.Domain.Entities;
//using ReactShop.LoggerService;
//using System;

//using System.Threading.Tasks;
//using ReactShop.Services.ShoppingCartService;

//namespace ReactShop.Web.Controllers
//{
//    public class ShoppingCartController : BaseController<CartItemDto>
//    {
        
//        public ShoppingCart CurrentShoppingCart { get; }
//        private readonly IShoppingCartService _shoppingCartService;

//        public ShoppingCartController(IShoppingCartService shoppingCartService,  IMapper mapper, ILoggerManager logger, ShoppingCart currentShoppingCart)
//            : base(shoppingCartService, mapper, logger)
//        {
            
//            CurrentShoppingCart = currentShoppingCart;
//            _shoppingCartService = shoppingCartService;
//        }

//        [HttpPost]
//        public async Task<IActionResult> ClearShoppingCart() 
//        {
//            try
//            {
//                await _shoppingCartService.ClearShoppingCart();
//                return Ok();
//            }
//            catch (Exception e)
//            {
//                return LogErrorAndReturnStatusCode(e.Message + e.InnerException + e.StackTrace, 500);
//            }
            
//        }
//    }
//}
